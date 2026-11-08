(function(root){'use strict';
 const parents={identity:{name:'u',domain:'every real input',tex:'u'},square:{name:'u²',domain:'every real input',tex:'u^2'},sqrt:{name:'√u',domain:'input ≥ 0',tex:'\\sqrt{u}'},reciprocal:{name:'1/u',domain:'input ≠ 0',tex:'1/u'},exp:{name:'eᵘ',domain:'every real input',tex:'e^u'},log:{name:'ln u',domain:'input > 0',tex:'\\ln u'}};
 function evaluate(rule,u){
  if(!Number.isFinite(u))return {ok:false,value:NaN,reason:'The intermediate value is outside the numerical range.'};
  if(rule.type==='sqrt'&&u<0)return {ok:false,value:NaN,reason:'A square root needs an input of zero or greater.'};
  if(rule.type==='log'&&u<=0)return {ok:false,value:NaN,reason:'A logarithm needs a positive input.'};
  if(rule.type==='reciprocal'&&u===0)return {ok:false,value:NaN,reason:'A reciprocal cannot take zero as its input.'};
  const v=rule.type==='identity'?u:rule.type==='square'?u*u:rule.type==='sqrt'?Math.sqrt(u):rule.type==='reciprocal'?1/u:rule.type==='exp'?Math.exp(u):Math.log(u);
  return {ok:true,value:rule.a*v+rule.b,reason:''};
 }
 function compose(f,g,x){const inner=evaluate(g,x);if(!inner.ok)return {inner,outer:{ok:false,value:NaN,reason:'The inner function is undefined, so the composition stops here.'}};return {inner,outer:evaluate(f,inner.value)};}
 function fmt(x){if(!Number.isFinite(x))return 'outside numerical range';if(Math.abs(x)<1e-12)return '0';if(Math.abs(x)>1e5||Math.abs(x)<.0001)return x.toExponential(3);return Number(x.toFixed(4)).toString();}
 function formula(r,input='x'){
  const base=r.type==='identity'?input:r.type==='square'?input+'²':r.type==='sqrt'?'√('+input+')':r.type==='reciprocal'?'1/('+input+')':r.type==='exp'?'e^('+input+')':'ln('+input+')';
  const scaled=r.a===1?base:r.a===-1?'−('+base+')':fmt(r.a)+'·('+base+')';return scaled+(r.b===0?'':r.b>0?' + '+fmt(r.b):' − '+fmt(-r.b));
 }
 const presets={
  logQuadratic:{title:'Logarithm of a quadratic',f:{type:'log',a:1,b:0},g:{type:'square',a:1,b:1},domain:'All real x: x² + 1 is always positive.'},
  peak:{title:'Exponential peak',f:{type:'exp',a:1,b:0},g:{type:'square',a:-1,b:0},domain:'All real x: squaring, negating, and exponentiating accept every real input.'},
  logDomain:{title:'Logarithm domain',f:{type:'log',a:1,b:0},g:{type:'square',a:-1,b:4},domain:'−2 < x < 2, because 4 − x² must be positive.'},
  rootLog:{title:'Square root of a logarithm',f:{type:'sqrt',a:1,b:0},g:{type:'log',a:1,b:0},domain:'x ≥ 1: x must be positive and ln x must be zero or greater.'},
  order:{title:'Order matters',f:{type:'square',a:1,b:0},g:{type:'identity',a:1,b:3},domain:'All real x: the inner linear function and outer square accept every real input.'},
  denominator:{title:'A denominator restriction',f:{type:'reciprocal',a:1,b:0},g:{type:'identity',a:2,b:-4},domain:'Every real x except 2, because 2x − 4 cannot be zero.'}
 };
 const api={parents,evaluate,compose,fmt,formula,presets};if(typeof module==='object'&&module.exports)module.exports=api;else root.CompositionMath=api;
})(typeof window!=='undefined'?window:globalThis);
