window.addEventListener('DOMContentLoaded',()=>{
  const hint=document.querySelector('.feedhint');
  if(hint) hint.remove();
  const attempt=document.getElementById('attemptStat');
  if(attempt && attempt.parentElement) attempt.parentElement.remove();
  const stats=document.querySelector('.round-stats');
  if(stats) stats.style.gridTemplateColumns='repeat(2,1fr)';
  document.body.style.background='radial-gradient(circle at 18% 8%, rgba(190,158,203,.42), transparent 32%), radial-gradient(circle at 82% 12%, rgba(132,103,148,.34), transparent 30%), linear-gradient(180deg,#8d75a0 0%,#826b94 52%,#786389 100%)';
});