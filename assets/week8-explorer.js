(()=>{'use strict';
 const M=CompositionMath,P=CompositionPlots,$=id=>document.getElementById(id);
 let f,g,preset='logQuadratic',reversed=false;
 const reversedPresetDomains={
  logQuadratic:'x > 0: the logarithm runs first, so g(f(x)) = (ln x)² + 1 requires a positive input.',
  peak:'All real x: the exponential runs first and its positive output can always be squared and negated.',
  logDomain:'x > 0: the logarithm runs first, and 4 − (ln x)² accepts any real logarithm output.',
  rootLog:'x > 0: the square root runs first, and the logarithm needs its result to be positive. At x = 0 it would receive zero.',
  order:'All real x: first square x, then add three.',
  denominator:'Every real x except 0: the reciprocal runs first, so division by zero is the restriction.'
 };
 function rule(prefix){return {type:$(prefix+'Type').value,a:Number($(prefix+'Scale').value),b:Number($(prefix+'Shift').value)};}
 function set(prefix,r){$(prefix+'Type').value=r.type;$(prefix+'Scale').value=r.a;$(prefix+'Shift').value=r.b;}
 function valueText(r){return r.ok?M.fmt(r.value):'undefined';}
 function render(){
  // The two named functions remain fixed. Only the order of evaluation changes.
  f=rule('outer');g=rule('inner');
  const first=reversed?f:g,second=reversed?g:f;
  const firstName=reversed?'f':'g',secondName=reversed?'g':'f';
  const compositeName=secondName+'('+firstName+'(x))';
  const x=Number($('inputX').value),r=M.compose(second,first,x);
  $('inputXValue').textContent=M.fmt(x);
  for(const prefix of ['inner','outer'])
   for(const part of ['Scale','Shift'])
    $(prefix+part+'Value').textContent=M.fmt(Number($(prefix+part).value));
  $('innerFunctionHeading').textContent='Function g ('+(reversed?'second':'first')+')';
  $('outerFunctionHeading').textContent='Function f ('+(reversed?'first':'second')+')';
  $('swapFunctions').textContent=reversed?'Switch to f(g(x))':'Switch to g(f(x))';
  $('swapFunctions').setAttribute('aria-pressed',String(reversed));
  $('innerRule').textContent=firstName+'(x) = '+M.formula(first,'x');
  $('outerRule').textContent=secondName+'(u) = '+M.formula(second,'u');
  $('compositeRule').textContent=compositeName+' = '+M.formula(second,'('+M.formula(first,'x')+')');
  $('stageUName').textContent='Intermediate value '+firstName+'(x)';
  $('stageYName').textContent='Final output '+compositeName;
  $('stageX').textContent=M.fmt(x);
  $('stageU').textContent=valueText(r.inner);
  $('stageY').textContent=valueText(r.outer);
  $('stageReason').textContent=!r.inner.ok?
   'The first function ('+firstName+') is undefined: '+r.inner.reason:
   !r.outer.ok?'The second function ('+secondName+') is undefined: '+r.outer.reason:
   'The output '+M.fmt(r.inner.value)+' of '+firstName+' becomes the input to '+secondName+', giving '+M.fmt(r.outer.value)+'.';
  $('domainText').textContent=preset?
   (reversed?reversedPresetDomains[preset]:M.presets[preset].domain):
   'First require x to satisfy '+firstName+' ('+M.parents[first.type].domain+'). Then require '+firstName+'(x) to be a valid input for '+secondName+' ('+M.parents[second.type].domain+').';
  const fn=(rule,u)=>{const o=M.evaluate(rule,u);return o.ok?o.value:NaN;};
  $('innerPlot').setAttribute('aria-label','Graph of '+firstName+' with the selected input and its output marked');
  $('outerPlot').setAttribute('aria-label','Graph of '+secondName+' with the output of '+firstName+' as its input');
  $('compositePlot').setAttribute('aria-label','Graph of '+compositeName+' with the final output marked');
  P.plot($('innerPlot'),u=>fn(first,u),{point:r.inner.ok?[x,r.inner.value]:null,xlabel:'x',color:P.css('--blue')});
  P.plot($('outerPlot'),u=>fn(second,u),{point:r.outer.ok?[r.inner.value,r.outer.value]:null,xlabel:'u = '+firstName+'(x)',color:P.css('--orange')});
  P.plot($('compositePlot'),u=>{const c=M.compose(second,first,u);return c.outer.ok?c.outer.value:NaN;},
   {point:r.outer.ok?[x,r.outer.value]:null,xlabel:'x',color:P.css('--green')});
  P.domain($('domainPlot'),u=>M.compose(second,first,u).outer.ok,x);
 }
 function choose(id){
  preset=id;reversed=false;$('preset').value=id;
  const p=M.presets[id];set('inner',p.g);set('outer',p.f);render();
 }
 for(const prefix of ['inner','outer']){
  const select=$(prefix+'Type');
  for(const [key,v] of Object.entries(M.parents)){
   const o=document.createElement('option');o.value=key;o.textContent=v.name;select.appendChild(o);
  }
  for(const part of ['Type','Scale','Shift'])
   $(prefix+part).addEventListener('input',()=>{preset='';$('preset').value='';render();});
 }
 $('preset').addEventListener('change',e=>{if(e.target.value)choose(e.target.value);});
 $('inputX').addEventListener('input',render);
 $('swapFunctions').addEventListener('click',()=>{reversed=!reversed;render();});
 $('resetExplorer').addEventListener('click',()=>{$('inputX').value=1;choose('logQuadratic');});
 window.addEventListener('resize',render);
 choose('logQuadratic');
})();