
(function(){
  const ACTIVITY_THEME_KEY='math141_precalculus_activity_theme';
  const LMS_KEY='math141_precalculus_lms_state_v2';
  function readLms(){try{return JSON.parse(localStorage.getItem(LMS_KEY)||'null')}catch(e){return null}}
  function preferredTheme(){
    const q=new URLSearchParams(location.search).get('theme');
    if(q==='light'||q==='dark') return q;
    const lms=readLms(); if(lms&&(lms.theme==='light'||lms.theme==='dark')) return lms.theme;
    let own=null;try{own=localStorage.getItem(ACTIVITY_THEME_KEY)}catch(e){} if(own==='light'||own==='dark') return own;
    return 'light';
  }
  function updateButtons(theme){
    document.querySelectorAll('[data-theme-toggle]').forEach(b=>{
      b.textContent=theme==='dark'?'☀ Light':'☾ Dark';
      b.setAttribute('aria-label',theme==='dark'?'Switch to light theme':'Switch to dark theme');
      b.setAttribute('aria-pressed',String(theme==='dark'));
    });
  }
  function setTheme(theme,persist=true){
    document.documentElement.dataset.theme=theme;
    if(persist){
      try{localStorage.setItem(ACTIVITY_THEME_KEY,theme)}catch(e){}
      try{const lms=readLms();if(lms){lms.theme=theme;localStorage.setItem(LMS_KEY,JSON.stringify(lms))}}catch(e){}
    }
    updateButtons(theme);
    requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));
  }
  window.activityCss=function(name){return getComputedStyle(document.documentElement).getPropertyValue(name).trim()};
  window.activityTheme={set:setTheme,get:()=>document.documentElement.dataset.theme||'light'};
  setTheme(preferredTheme(),false);
  function compactPhysicalModel(){
    const scene=document.getElementById('scene');
    const plot=document.getElementById('plot');
    if(!scene||!plot) return;
    const physicalCard=scene.closest('.card');
    const modelCard=plot.closest('.card');
    if(!physicalCard||!modelCard||physicalCard===modelCard) return;

    document.body.classList.add('has-physical-model');
    modelCard.classList.add('compact-model-card');

    const graphWrap=plot.closest('.canvas-wrap');
    const graphGroup=graphWrap && graphWrap.parentElement;
    const modelGrid=graphGroup && graphGroup.parentElement;
    const equationCol=modelGrid && [...modelGrid.children].find(el=>el!==graphGroup);
    const sceneWrap=scene.closest('.canvas-wrap');
    const sceneLegend=sceneWrap && sceneWrap.nextElementSibling && sceneWrap.nextElementSibling.classList.contains('graph-legend') ? sceneWrap.nextElementSibling : null;
    const sceneNote=physicalCard.querySelector('.note');
    const simControls=physicalCard.querySelector('.sim-controls');

    if(!graphWrap||!graphGroup||!modelGrid||!sceneWrap) return;

    const stage=document.createElement('div');
    stage.className='dual-model-stage';
    const graphPane=document.createElement('div');
    graphPane.className='model-pane';
    graphPane.innerHTML='<h3>Graph of the model</h3>';
    graphPane.appendChild(graphGroup);

    const physicalPane=document.createElement('div');
    physicalPane.className='model-pane';
    physicalPane.innerHTML='<h3>Physical model</h3>';
    if(simControls) physicalPane.appendChild(simControls);
    physicalPane.appendChild(sceneWrap);
    if(sceneLegend) physicalPane.appendChild(sceneLegend);
    if(sceneNote) physicalPane.appendChild(sceneNote);

    stage.append(graphPane,physicalPane);
    modelGrid.parentNode.insertBefore(stage,modelGrid);

    if(equationCol){
      const explanation=document.createElement('div');
      explanation.className='model-explanation';
      explanation.appendChild(equationCol);
      stage.insertAdjacentElement('afterend',explanation);
    }
    modelGrid.remove();
    physicalCard.remove();
    requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));
  }
  window.activityPlayback=function(options){
    const range=typeof options.range==='string'?document.getElementById(options.range):options.range;
    const playButton=typeof options.playButton==='string'?document.getElementById(options.playButton):options.playButton;
    const resetButton=typeof options.resetButton==='string'?document.getElementById(options.resetButton):options.resetButton;
    const status=typeof options.status==='string'?document.getElementById(options.status):options.status;
    if(!range||!playButton) return null;
    let raf=0,playing=false,last=0,direction=1;
    const duration=Math.max(600,Number(options.duration)||5000);
    const bounds=()=>{
      const min=Number(typeof options.getMin==='function'?options.getMin():range.min||0);
      const max=Number(typeof options.getMax==='function'?options.getMax():range.max||1);
      return {min,max:max>min?max:min+1};
    };
    const setStatus=()=>{ if(status) status.textContent=playing?(options.playingText||'Playing…'):(options.pausedText||'Ready'); };
    const setButton=()=>{playButton.textContent=playing?'❚❚ Pause':(options.label||'▶ Play');playButton.setAttribute('aria-pressed',String(playing));setStatus();};
    const emit=v=>{range.value=String(v);range.dispatchEvent(new Event('input',{bubbles:true}));};
    const stop=()=>{playing=false;if(raf)cancelAnimationFrame(raf);raf=0;last=0;setButton();};
    const tick=ts=>{
      if(!playing)return;
      if(!last)last=ts;
      const dt=Math.min(80,ts-last);last=ts;
      const {min,max}=bounds(); let v=Number(range.value); if(!Number.isFinite(v))v=min;
      v += direction*(max-min)*(dt/duration);
      if(v>=max){
        if(options.pingPong){v=max;direction=-1;}
        else if(options.loop){v=min;}
        else{emit(max);stop();return;}
      }else if(v<=min){
        if(options.pingPong){v=min;direction=1;}
        else if(options.loop){v=max;}
        else{emit(min);stop();return;}
      }
      emit(v);raf=requestAnimationFrame(tick);
    };
    playButton.addEventListener('click',()=>{
      if(playing){stop();return;}
      const {min,max}=bounds(); let v=Number(range.value);
      if(!options.pingPong && !options.loop && v>=max-1e-9) emit(min);
      playing=true;last=0;setButton();raf=requestAnimationFrame(tick);
    });
    if(resetButton) resetButton.addEventListener('click',()=>{stop();direction=1;const {min}=bounds();emit(options.resetValue==null?min:Number(options.resetValue));});
    range.addEventListener('pointerdown',()=>{if(playing)stop()});
    setButton();
    return {stop,get playing(){return playing;}};
  };
  window.addEventListener('DOMContentLoaded',()=>{
    updateButtons(document.documentElement.dataset.theme||'light');
    document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>setTheme((document.documentElement.dataset.theme||'light')==='dark'?'light':'dark',true)));
    compactPhysicalModel();
  });
})();
