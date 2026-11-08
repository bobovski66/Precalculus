(()=>{'use strict';
 const M=CompositionMath,P=CompositionPlots,$=id=>document.getElementById(id);let f,g,preset='logQuadratic';
 function rule(prefix){return {type:$(prefix+'Type').value,a:Number($(prefix+'Scale').value),b:Number($(prefix+'Shift').value)};}
 function set(prefix,r){$(prefix+'Type').value=r.type;$(prefix+'Scale').value=r.a;$(prefix+'Shift').value=r.b;}
 function valueText(r){return r.ok?M.fmt(r.value):'undefined';}
 function render(){
  f=rule('outer');g=rule('inner');const x=Number($('inputX').value),r=M.compose(f,g,x);$('inputXValue').textContent=M.fmt(x);
  for(const prefix of ['inner','outer'])for(const part of ['Scale','Shift'])$(prefix+part+'Value').textContent=M.fmt(Number($(prefix+part).value));
  $('innerRule').textContent='g(x) = '+M.formula(g,'x');$('outerRule').textContent='f(u) = '+M.formula(f,'u');$('compositeRule').textContent='f(g(x)) = '+M.formula(f,'('+M.formula(g,'x')+')');
  $('stageX').textContent=M.fmt(x);$('stageU').textContent=valueText(r.inner);$('stageY').textContent=valueText(r.outer);
  $('stageReason').textContent=!r.inner.ok?'The inner step stops: '+r.inner.reason:!r.outer.ok?'The outer step stops: '+r.outer.reason:'The output '+M.fmt(r.inner.value)+' of g becomes the input to f, giving '+M.fmt(r.outer.value)+'.';
  $('domainText').textContent=preset?M.presets[preset].domain:'Require x to satisfy the inner rule ('+M.parents[g.type].domain+'), then require g(x) to satisfy the outer rule ('+M.parents[f.type].domain+'). Scaling and shifting the output do not remove a parent function’s input restrictions.';
  const fn=(r,u)=>{const o=M.evaluate(r,u);return o.ok?o.value:NaN;};
  P.plot($('innerPlot'),x=>fn(g,x),{point:r.inner.ok?[x,r.inner.value]:null,xlabel:'x',color:P.css('--blue')});
  P.plot($('outerPlot'),u=>fn(f,u),{point:r.outer.ok?[r.inner.value,r.outer.value]:null,xlabel:'u = g(x)',color:P.css('--orange')});
  P.plot($('compositePlot'),x=>{const c=M.compose(f,g,x);return c.outer.ok?c.outer.value:NaN;},{point:r.outer.ok?[x,r.outer.value]:null,xlabel:'x',color:P.css('--green')});
  P.domain($('domainPlot'),x=>M.compose(f,g,x).outer.ok,x);
 }
 function choose(id){preset=id;$('preset').value=id;const p=M.presets[id];set('inner',p.g);set('outer',p.f);render();}
 for(const prefix of ['inner','outer']){const select=$(prefix+'Type');for(const [key,v] of Object.entries(M.parents)){const o=document.createElement('option');o.value=key;o.textContent=v.name;select.appendChild(o);}for(const part of ['Type','Scale','Shift'])$(prefix+part).addEventListener('input',()=>{preset='';$('preset').value='';render();});}
 $('preset').addEventListener('change',e=>{if(e.target.value)choose(e.target.value);});$('inputX').addEventListener('input',render);
 $('swapFunctions').addEventListener('click',()=>{const f=rule('outer'),g=rule('inner');set('inner',f);set('outer',g);preset='';$('preset').value='';render();});
 $('resetExplorer').addEventListener('click',()=>{$('inputX').value=1;choose('logQuadratic');});
 window.addEventListener('resize',render);choose('logQuadratic');
})();
