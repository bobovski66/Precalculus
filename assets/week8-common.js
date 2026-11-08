(()=>{'use strict';
 document.querySelectorAll('[data-check]').forEach(b=>b.addEventListener('click',()=>{
  const input=document.getElementById(b.dataset.check),out=document.getElementById(input.id+'-feedback');
  const value=input.value.trim(),num=Number(value),answer=Number(input.dataset.number),tol=Number(input.dataset.tolerance||.001);
  const ok=value!==''&&Number.isFinite(num)&&Math.abs(num-answer)<=tol;
  out.className='feedback '+(ok?'correct':'incorrect');out.textContent=ok?'Correct.':(!value?'Enter a numerical answer.':'Try again. '+input.dataset.hint);
 }));
 const fields=[...document.querySelectorAll('[data-save]')];if(!fields.length)return;
 const key='math141_week8_composition_'+document.body.dataset.page+'_v1';
 function save(){const data={};fields.forEach(f=>data[f.id]=f.value);try{localStorage.setItem(key,JSON.stringify(data));const s=document.getElementById('saveStatus');if(s)s.textContent='Answers saved in this browser.';}catch(e){const s=document.getElementById('saveStatus');if(s)s.textContent='Browser saving is unavailable. Prepare a submission copy to keep your work.';}}
 let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}');}catch(e){}fields.forEach(f=>{if(saved[f.id]!==undefined)f.value=saved[f.id];f.addEventListener('input',save);});
 const prepare=document.getElementById('prepareSubmission');let originalMain=null;
 if(prepare)prepare.addEventListener('click',()=>{
  const name=document.getElementById('studentName');if(!name.value.trim()){name.focus();document.getElementById('saveStatus').textContent='Enter your name before preparing your submission.';return;}
  save();originalMain=document.querySelector('main').innerHTML;
  const identity=document.getElementById('submissionIdentity');const p=document.createElement('p');p.textContent='Student: '+name.value.trim()+' · '+(document.getElementById('studentDate')?.value||new Date().toLocaleDateString());identity.replaceChildren(p);
  document.querySelectorAll('[data-save]').forEach(f=>{const d=document.createElement('div');d.className='submission-answer';d.textContent=f.value.trim()||'No response';f.replaceWith(d);});
  document.body.classList.add('submission-mode');window.scrollTo({top:0,behavior:'smooth'});
 });
 document.getElementById('returnToLab')?.addEventListener('click',()=>location.reload());
 document.getElementById('downloadSubmission')?.addEventListener('click',()=>{
  const copy=document.documentElement.cloneNode(true);copy.querySelectorAll('details,script,.working-note,.toolbar,.submission-controls,.check,.feedback').forEach(n=>n.remove());
  copy.querySelectorAll('a[href],link[href]').forEach(a=>a.setAttribute('href',new URL(a.getAttribute('href'),location.href).href));
  // Keep the rendered mathematics; removing scripts also keeps the downloaded submission static.
  const css=[...document.querySelectorAll('style')];css.forEach(s=>copy.querySelector('head').appendChild(s.cloneNode(true)));
  const blob=new Blob(['<!doctype html>\n'+copy.outerHTML],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Precalculus_Week8_Lab_Submission.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);
 });
})();
