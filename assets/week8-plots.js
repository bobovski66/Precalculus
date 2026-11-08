(function(){'use strict';
 function css(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim();}
 function setup(canvas){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*d));canvas.height=Math.max(1,Math.round(r.height*d));const c=canvas.getContext('2d');c.setTransform(d,0,0,d,0,0);return {c,w:r.width,h:r.height};}
 function step(span){const raw=span/6,p=10**Math.floor(Math.log10(raw));return [1,2,5,10].map(x=>x*p).find(x=>x>=raw)||10*p;}
 function plot(canvas,fn,options={}){
  const {c,w,h}=setup(canvas),p={left:50,right:15,top:16,bottom:39};const xr=options.x||[-5,5],yr=options.y||[-5,10];
  const width=w-p.left-p.right,height=h-p.top-p.bottom;const px=x=>p.left+(x-xr[0])/(xr[1]-xr[0])*width,py=y=>p.top+(yr[1]-y)/(yr[1]-yr[0])*height;
  c.fillStyle=css('--plot');c.fillRect(0,0,w,h);c.lineWidth=1;c.font='11px system-ui';c.textAlign='center';c.textBaseline='top';
  const xs=step(xr[1]-xr[0]),ys=step(yr[1]-yr[0]);
  for(let x=Math.ceil(xr[0]/xs)*xs;x<=xr[1]+1e-8;x+=xs){c.strokeStyle=css('--grid');c.beginPath();c.moveTo(px(x),p.top);c.lineTo(px(x),h-p.bottom);c.stroke();c.fillStyle=css('--muted');c.fillText(Number(x.toFixed(4)).toString(),px(x),h-p.bottom+6);}
  c.textAlign='right';c.textBaseline='middle';for(let y=Math.ceil(yr[0]/ys)*ys;y<=yr[1]+1e-8;y+=ys){c.strokeStyle=css('--grid');c.beginPath();c.moveTo(p.left,py(y));c.lineTo(w-p.right,py(y));c.stroke();c.fillStyle=css('--muted');c.fillText(Number(y.toFixed(4)).toString(),p.left-8,py(y));}
  c.strokeStyle=css('--axis');c.lineWidth=1.3;if(xr[0]<=0&&xr[1]>=0){c.beginPath();c.moveTo(px(0),p.top);c.lineTo(px(0),h-p.bottom);c.stroke();}if(yr[0]<=0&&yr[1]>=0){c.beginPath();c.moveTo(p.left,py(0));c.lineTo(w-p.right,py(0));c.stroke();}
  c.save();c.beginPath();c.rect(p.left,p.top,width,height);c.clip();c.strokeStyle=options.color||css('--blue');c.lineWidth=2.5;c.beginPath();let prev=null;
  for(let i=0;i<=800;i++){const x=xr[0]+(xr[1]-xr[0])*i/800,y=fn(x);if(!Number.isFinite(y)){prev=null;continue;}const pt=[px(x),py(y)];if(!prev||Math.abs(pt[1]-prev[1])>height*.7)c.moveTo(...pt);else c.lineTo(...pt);prev=pt;}c.stroke();
  if(options.point){const [x,y]=options.point;if(Number.isFinite(x)&&Number.isFinite(y)){c.fillStyle=options.color||css('--blue');c.strokeStyle=css('--plot');c.lineWidth=2;c.beginPath();c.arc(px(x),py(y),5.5,0,Math.PI*2);c.fill();c.stroke();}}
  c.restore();c.fillStyle=css('--muted');c.font='11px system-ui';c.textAlign='right';c.textBaseline='bottom';c.fillText(options.xlabel||'input',w-p.right,h-2);
 }
 function domain(canvas,valid,current){const {c,w,h}=setup(canvas),left=30,right=w-20,top=12,height=18;for(let i=0;i<right-left;i++){const x=-5+10*i/(right-left);c.fillStyle=valid(x)?css('--green'):css('--red');c.globalAlpha=.55;c.fillRect(left+i,top,1,height);}c.globalAlpha=1;c.fillStyle=css('--ink');c.font='11px system-ui';c.textAlign='center';for(const x of [-5,0,5])c.fillText(x,left+(right-left)*(x+5)/10,top+height+18);const p=left+(right-left)*(current+5)/10;c.strokeStyle=css('--ink');c.lineWidth=2;c.beginPath();c.moveTo(p,top-5);c.lineTo(p,top+height+5);c.stroke();}
 window.CompositionPlots={plot,domain,css};
})();
