/* Review navigation and browser-only practice interactions. */
(function(){
  "use strict";
  var modules=window.PRECALC_REVIEW_MODULES;
  var bank=window.PRECALC_PROBLEM_BANK;
  if(!modules || !bank){document.body.insertAdjacentHTML("afterbegin","<p>Review resources could not be loaded. Please reload this page.</p>");return;}
  var $=function(id){return document.getElementById(id);};
  var STORAGE="precalc141_review_practice_1to5_v1";
  var reviewModule=1,activeMode="review",current=null,lastGenerator="",stats=loadStats();
  var params=new URLSearchParams(location.search);
  var initialModule=Number(params.get("module"));
  if(Number.isInteger(initialModule)&&initialModule>=1&&initialModule<=5)reviewModule=initialModule;

  function loadStats(){
    var basic={};
    for(var n=1;n<=5;n++)basic[n]={attempted:0,solved:0,first:0};
    try{
      var saved=JSON.parse(localStorage.getItem(STORAGE));
      if(saved && typeof saved==="object"){
        Object.keys(basic).forEach(function(k){
          var entry=saved[k]||{};
          ["attempted","solved","first"].forEach(function(field){
            if(Number.isInteger(entry[field])&&entry[field]>=0)basic[k][field]=entry[field];
          });
        });
      }
    }catch(e){}
    return basic;
  }
  function saveStats(){try{localStorage.setItem(STORAGE,JSON.stringify(stats));}catch(e){}}
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,function(x){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x];
  });}
  function mathify(node){
    if(window.MathJax && typeof MathJax.typesetPromise==="function"){
      if(typeof MathJax.typesetClear==="function")MathJax.typesetClear([node]);
      MathJax.typesetPromise([node]).catch(function(){});
    }
  }
  function updateAddress(){
    var url=new URL(location.href);
    url.searchParams.set("mode",activeMode);
    if(activeMode==="review")url.searchParams.set("module",reviewModule);
    else{
      url.searchParams.set("module",$("practiceModule").value);
      if($("practiceTopic").value!=="all")url.searchParams.set("topic",$("practiceTopic").value);
      else url.searchParams.delete("topic");
    }
    history.replaceState(null,"",url);
  }
  function switchMode(mode,scroll){
    activeMode=mode==="practice"?"practice":"review";
    $("reviewView").classList.toggle("active",activeMode==="review");
    $("practiceView").classList.toggle("active",activeMode==="practice");
    $("reviewTab").setAttribute("aria-selected",String(activeMode==="review"));
    $("practiceTab").setAttribute("aria-selected",String(activeMode==="practice"));
    updateAddress();
    if(scroll!==false)window.scrollTo({top:0,behavior:"smooth"});
    if(activeMode==="practice"&&current)mathify($("questionPrompt"));
  }
  function renderReviewTabs(){
    $("reviewTabs").innerHTML=modules.map(function(m){
      return '<button type="button" data-review-module="'+m.id+'" aria-pressed="'+(m.id===reviewModule)+'">Module '+m.id+" · "+escapeHtml(m.short)+"</button>";
    }).join("");
    $("reviewTabs").querySelectorAll("button").forEach(function(button){
      button.addEventListener("click",function(){
        reviewModule=Number(button.dataset.reviewModule);
        renderReviewTabs();renderReview();updateAddress();
      });
    });
  }
  function renderReview(){
    var m=modules[reviewModule-1];
    var objectiveHtml=m.objectives.map(function(s){return "<li>"+s+"</li>";}).join("");
    var ideaHtml=m.ideas.map(function(i){
      return '<div class="topic-item"><strong>'+i[0]+"</strong><p>"+i[1]+"</p></div>";
    }).join("");
    var pitfalls=m.pitfalls.map(function(s){return "<li>"+s+"</li>";}).join("");
    var ex=m.examples.map(function(e,i){
      var li=e.steps.map(function(s){return "<li>"+s+"</li>";}).join("");
      return '<article class="example"><div class="pill">Worked example '+(i+1)+'</div><h3>'+e.title+'</h3><div class="prompt">'+e.question+
        '</div><details'+(i===0?" open":"")+'><summary>View the step-by-step solution</summary><ol>'+li+'</ol><div class="answer"><strong>Conclusion:</strong> '+e.answer+'</div></details></article>';
    }).join("");
    $("reviewContent").innerHTML='<div class="review-layout"><div class="stack">'+
      '<section class="panel"><div class="eyebrow">Module '+m.id+' of 5</div><h2>'+m.title+'</h2><p class="lede">'+m.summary+
      '</p><h3>By the end of this review, you should be able to:</h3><ul>'+objectiveHtml+'</ul>'+
      '<div class="review-note"><strong>Read more:</strong> <a href="'+m.note+'" target="_blank" rel="noopener">Module '+m.id+' PDF reading ↗</a>. The worked examples and practice follow the topics and methods developed in the reading.</div></section>'+
      '<section class="panel"><h2>Work through these examples</h2><p class="lede">Try each question before opening the solution. Read the steps carefully; the reasoning matters as much as the answer.</p>'+ex+'</section>'+
      '<section class="panel"><h2>Ready for more?</h2><p>Practice the same mathematical ideas with new numbers and instant checking. Worked solutions become available after an attempt.</p>'+
      '<div class="review-bottom"><button id="reviewToPractice" class="btn" type="button">Practice Module '+m.id+' →</button><small>Unlimited randomized questions</small></div></section></div>'+
      '<aside class="sticky-side"><section class="panel"><h3>Essential mathematical ideas</h3>'+ideaHtml+'</section>'+
      '<section class="panel pitfalls"><h3>Common errors to watch for</h3><ul>'+pitfalls+'</ul></section></aside></div>';
    $("reviewToPractice").addEventListener("click",function(){
      $("practiceModule").value=String(reviewModule);
      fillTopics();
      newProblem();
      switchMode("practice");
    });
    mathify($("reviewContent"));
  }
  function fillTopics(preserve){
    var selected=preserve||"all";
    var module=$("practiceModule").value;
    var topics=module==="all"?[]:bank[module].map(function(x){return x.topic;});
    $("practiceTopic").innerHTML='<option value="all">All topics</option>'+topics.map(function(t){
      return '<option value="'+escapeHtml(t)+'">'+escapeHtml(t)+'</option>';
    }).join("");
    $("practiceTopic").value=topics.indexOf(selected)>=0?selected:"all";
  }
  function eligible(){
    var chosen=$("practiceModule").value,topic=$("practiceTopic").value,items=[];
    var ids=chosen==="all"?[1,2,3,4,5]:[Number(chosen)];
    ids.forEach(function(id){
      bank[id].forEach(function(gen,i){
        if(topic==="all"||topic===gen.topic)items.push({module:id,topic:gen.topic,make:gen.make,key:id+"-"+i});
      });
    });
    return items;
  }
  function newProblem(){
    var pool=eligible();
    if(pool.length===0)return;
    var withoutPrevious=pool.filter(function(item){return item.key!==lastGenerator;});
    var options=withoutPrevious.length?withoutPrevious:pool;
    var generator=options[Math.floor(Math.random()*options.length)];
    lastGenerator=generator.key;
    var q=generator.make();
    current={module:generator.module,question:q,tries:0,solved:false};
    $("questionModule").textContent="Module "+generator.module+" · "+modules[generator.module-1].short;
    $("questionTopic").textContent=q.topic;
    $("questionPrompt").textContent="";
    $("questionPrompt").innerHTML=q.prompt;
    $("answerInstructions").textContent=q.instruction;
    if(q.kind==="choice"){
      $("answerArea").innerHTML='<div class="answer-label" id="responseLabel">Choose your answer</div><div class="choice-grid" role="group" aria-labelledby="responseLabel">'+
        q.options.map(function(o,i){return '<label class="choice-label"><input type="radio" name="responseChoice" value="'+i+'"><span>'+o+'</span></label>';}).join("")+"</div>";
    }else{
      $("answerArea").innerHTML='<label class="answer-label" for="responseInput">Your answer</label>'+
        '<input class="answer-input" id="responseInput" type="text" autocomplete="off" spellcheck="false" placeholder="'+(q.kind==="pair"?"(x, y)":q.kind==="set"?"x₁, x₂":"Enter a number")+'">';
      $("responseInput").addEventListener("keydown",function(event){if(event.key==="Enter"){event.preventDefault();checkAnswer();}});
    }
    $("checkBtn").disabled=false;
    $("solutionBtn").hidden=true;
    $("solutionBtn").textContent="Show worked solution";
    $("solutionBtn").setAttribute("aria-expanded","false");
    $("solutionPanel").hidden=true;
    $("feedback").hidden=true;
    $("hint").hidden=true;
    $("hint").textContent="";
    $("solutionSteps").innerHTML="";
    updateStats();
    mathify($("questionPrompt"));
    mathify($("answerArea"));
    if(q.kind!=="choice")$("responseInput").focus({preventScroll:true});
  }
  function numeric(s){
    if(typeof s==="number")return s;
    var value=String(s).trim().replace(/\s/g,"").replace(/−/g,"-");
    if(!value)return NaN;
    var slash=value.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\/([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/);
    if(slash){
      var denom=Number(slash[2]);
      return denom===0?NaN:Number(slash[1])/denom;
    }
    if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value))return NaN;
    return Number(value);
  }
  function near(a,b){return Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<=1e-7*Math.max(1,Math.abs(a),Math.abs(b));}
  function numbersFromText(s){
    var cleaned=String(s).trim().replace(/^\s*[\(\[\{]/,"").replace(/[\)\]\}]\s*$/,"");
    return cleaned.split(/[,;]/).map(numeric);
  }
  function getResponse(){
    var q=current.question;
    if(q.kind==="choice"){
      var radio=$("answerArea").querySelector("input:checked");
      return radio?q.options[Number(radio.value)]:null;
    }
    return $("responseInput").value.trim();
  }
  function correctness(response){
    var q=current.question;
    if(q.kind==="choice")return response===q.answer;
    if(q.kind==="number")return near(numeric(response),q.answer);
    var nums=numbersFromText(response);
    if(nums.length!==q.answer.length || nums.some(function(n){return !Number.isFinite(n);})){return false;}
    if(q.kind==="pair")return nums.every(function(n,i){return near(n,q.answer[i]);});
    if(q.kind==="set"){
      var a=nums.slice().sort(function(x,y){return x-y;});
      var b=q.answer.slice().sort(function(x,y){return x-y;});
      return a.every(function(n,i){return near(n,b[i]);});
    }
    return false;
  }
  function answerLabel(q){
    if(q.kind==="number")return String(Math.round(q.answer*100000000)/100000000);
    if(q.kind==="choice")return q.answer;
    if(q.kind==="pair")return "("+q.answer.join(", ")+")";
    if(q.kind==="set")return q.answer.slice().sort(function(a,b){return a-b;}).join(", ");
    return "";
  }
  function updateStats(){
    var selected=$("practiceModule").value;
    var ids=selected==="all"?[1,2,3,4,5]:[Number(selected)];
    var result={attempted:0,solved:0,first:0};
    ids.forEach(function(id){
      Object.keys(result).forEach(function(key){result[key]+=stats[id][key];});
    });
    $("statAttempted").textContent=result.attempted;
    $("statCorrect").textContent=result.solved;
    $("statFirst").textContent=result.first;
  }
  function showFeedback(kind,msg){
    var box=$("feedback");
    box.className="status "+kind;
    box.textContent=msg;
    box.hidden=false;
  }
  function checkAnswer(){
    if(!current || current.solved)return;
    var q=current.question,response=getResponse();
    if(response===null || String(response).trim()===""){
      showFeedback("warn","Enter an answer before checking. You can open a solution after your first attempt.");
      return;
    }
    if(current.tries===0)stats[current.module].attempted++;
    current.tries++;
    var correct=correctness(response);
    $("solutionBtn").hidden=false;
    if(correct){
      current.solved=true;
      stats[current.module].solved++;
      if(current.tries===1)stats[current.module].first++;
      showFeedback("good",current.tries===1?"Correct on your first try!":"Correct! Your revision worked.");
      $("hint").hidden=true;
      $("checkBtn").disabled=true;
      $("answerArea").querySelectorAll("input").forEach(function(i){i.disabled=true;});
    }else{
      showFeedback("bad","Not quite. Revise your answer and check again, or open the worked solution.");
      $("hint").innerHTML="<strong>Hint:</strong> "+q.hint;
      $("hint").hidden=false;
      mathify($("hint"));
    }
    saveStats();updateStats();
  }
  function toggleSolution(){
    if(!current || current.tries<1)return;
    var pane=$("solutionPanel"),open=pane.hidden;
    pane.hidden=!open;
    $("solutionBtn").textContent=open?"Hide worked solution":"Show worked solution";
    $("solutionBtn").setAttribute("aria-expanded",String(open));
    if(open){
      $("solutionSteps").innerHTML=current.question.solution.map(function(s){return "<li>"+s+"</li>";}).join("")+
        '<li><strong>Answer:</strong> '+escapeHtml(answerLabel(current.question))+"</li>";
      mathify(pane);
    }
  }
  async function copyPracticeLink(){
    var url=new URL(location.href);
    url.searchParams.set("mode","practice");
    url.searchParams.set("module",$("practiceModule").value);
    if($("practiceTopic").value!=="all")url.searchParams.set("topic",$("practiceTopic").value);
    else url.searchParams.delete("topic");
    var button=$("copyPracticeLink");
    try{
      if(navigator.clipboard && window.isSecureContext)await navigator.clipboard.writeText(url.toString());
      else{
        var field=document.createElement("textarea");field.value=url.toString();
        document.body.appendChild(field);field.select();
        var success=document.execCommand("copy");field.remove();
        if(!success)throw new Error("Copy failed");
      }
      button.textContent="Link copied!";
      setTimeout(function(){button.textContent="Copy this practice link";},1700);
    }catch(e){window.prompt("Copy this link:",url.toString());}
  }
  $("reviewTab").addEventListener("click",function(){switchMode("review");});
  $("practiceTab").addEventListener("click",function(){switchMode("practice");});
  $("practiceModule").addEventListener("change",function(){fillTopics();newProblem();updateAddress();});
  $("practiceTopic").addEventListener("change",function(){newProblem();updateAddress();});
  $("newBtn").addEventListener("click",newProblem);
  $("checkBtn").addEventListener("click",checkAnswer);
  $("solutionBtn").addEventListener("click",toggleSolution);
  $("copyPracticeLink").addEventListener("click",copyPracticeLink);
  $("resetStats").addEventListener("click",function(){
    if(!confirm("Reset your saved practice counts for all five modules?"))return;
    Object.keys(stats).forEach(function(id){stats[id]={attempted:0,solved:0,first:0};});
    saveStats();updateStats();
  });
  renderReviewTabs();
  renderReview();
  if(params.get("module")==="all")$("practiceModule").value="all";
  else if(Number.isInteger(initialModule)&&initialModule>=1&&initialModule<=5)$("practiceModule").value=String(initialModule);
  fillTopics(params.get("topic")||"all");
  newProblem();
  switchMode(params.get("mode")==="practice"?"practice":"review",false);
  window.addEventListener("load",function(){mathify(document.body);});
})();