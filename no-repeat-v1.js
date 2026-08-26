window.addEventListener('DOMContentLoaded',()=>{
  const STORAGE_KEY='questionQueueKidsV1';
  function makeQueue(exclude=[]){
    return shuffle(QUESTIONS.map(q=>q.q).filter(q=>!exclude.includes(q)));
  }
  function getNextSeven(){
    let queue=[];
    try{queue=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')}catch(e){queue=[]}
    queue=queue.filter(q=>QUESTIONS.some(x=>x.q===q));
    if(queue.length===0) queue=makeQueue();
    const selected=[];
    while(selected.length<7){
      while(queue.length && selected.length<7){
        const qText=queue.shift();
        const q=QUESTIONS.find(x=>x.q===qText);
        if(q && !selected.some(s=>s.q===q.q)) selected.push(q);
      }
      if(selected.length<7){
        queue=makeQueue(selected.map(x=>x.q));
      }
    }
    localStorage.setItem(STORAGE_KEY,JSON.stringify(queue));
    return selected;
  }
  const btn=document.getElementById('newGameTop');
  if(!btn)return;
  btn.onclick=()=>{
    pool=getNextSeven();
    idx=0;score=0;doneCount=0;active=true;
    feedList.innerHTML='';feedList.style.display='none';
    loadQuestion();
  };
});