(()=>{'use strict';
const $=id=>document.getElementById(id);
function patchShare(){const e=$('shareLink');if(e&&e.textContent)e.textContent=e.textContent.replace(/([?&])v=11(&|$)/,'$1v=12$2')}
function init(){
  const ns=$('netStatus');if(ns)ns.textContent='Supabase Realtime v12';
  const tiny=document.querySelector('#home .tiny');if(tiny)tiny.textContent='Мультиплеерная викторина · Realtime v12';
  const observer=new MutationObserver(patchShare);observer.observe(document.body,{subtree:true,childList:true,characterData:true});
  patchShare();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();