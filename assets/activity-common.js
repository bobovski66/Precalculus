
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
  window.addEventListener('DOMContentLoaded',()=>{
    updateButtons(document.documentElement.dataset.theme||'light');
    document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>setTheme((document.documentElement.dataset.theme||'light')==='dark'?'light':'dark',true)));
  });
})();
