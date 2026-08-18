const ANIMAL_QUESTIONS=[
{q:"Какое животное чаще всего заводят дома?",a:[["кошку",240,["кот","кота","котенка"]],["собаку",200,["пес","пёс","щенка"]],["рыбок",160,["рыбы","рыбку"]],["хомяка",120,["хомяк"]],["попугая",80,["попугай"]],["черепаху",40,["черепаха"]]]},
{q:"Какое животное люди чаще всего боятся встретить в лесу?",a:[["медведя",240,["медведь"]],["волка",200,["волк"]],["змею",160,["змея"]],["кабана",120,["кабан"]],["рысь",80,["рыси"]],["клеща",40,["клещ"]]]},
{q:"Какое животное чаще всего ассоциируется с Африкой?",a:[["лев",240,["льва"]],["слон",200,["слона"]],["жираф",160,["жирафа"]],["зебра",120,["зебру"]],["носорог",80,["носорога"]],["гепард",40,["гепарда"]]]},
{q:"Какое животное чаще всего называют самым умным?",a:[["дельфин",240,["дельфина"]],["обезьяна",200,["шимпанзе","обезьяну"]],["собака",160,["собаку"]],["слон",120,["слона"]],["ворон",80,["ворона"]],["осьминог",40,["осьминога"]]]},
{q:"Какое животное чаще всего ассоциируется с Австралией?",a:[["кенгуру",240,[]],["коала",200,["коалу"]],["утконос",160,["утконоса"]],["вомбат",120,["вомбата"]],["динго",80,["собака динго"]],["эму",40,["страус эму"]]]},
{q:"Какое животное чаще всего можно увидеть в зоопарке?",a:[["обезьяну",240,["обезьяна"]],["льва",200,["лев"]],["слона",160,["слон"]],["жирафа",120,["жираф"]],["тигра",80,["тигр"]],["медведя",40,["медведь"]]]},
{q:"Какое животное чаще всего ассоциируется с медлительностью?",a:[["черепаха",240,["черепаху"]],["улитка",200,["улитку"]],["ленивец",160,["ленивца"]],["гусеница",120,["гусеницу"]],["коала",80,["коалу"]],["морская звезда",40,["звезда"]]]},
{q:"Какое животное чаще всего ассоциируется с хитростью?",a:[["лиса",240,["лису"]],["змея",200,["змею"]],["кошка",160,["кот"]],["обезьяна",120,["обезьяну"]],["ворона",80,["ворон"]],["енот",40,["енота"]]]},
{q:"Какое животное чаще всего ассоциируется с силой?",a:[["медведь",240,["медведя"]],["лев",200,["льва"]],["слон",160,["слона"]],["бык",120,["быка"]],["тигр",80,["тигра"]],["горилла",40,["гориллу"]]]},
{q:"Какое животное чаще всего ассоциируется со скоростью?",a:[["гепард",240,["гепарда"]],["лошадь",200,["конь"]],["сокол",160,["сапсан"]],["антилопа",120,["антилопу"]],["заяц",80,["зайца"]],["дельфин",40,["дельфина"]]]},
{q:"Какое морское животное люди чаще всего вспоминают первым?",a:[["дельфин",240,["дельфина"]],["акула",200,["акулу"]],["кит",160,["кита"]],["осьминог",120,["осьминога"]],["медуза",80,["медузу"]],["морская черепаха",40,["черепаха"]]]},
{q:"Какое морское животное люди чаще всего боятся?",a:[["акула",240,["акулу"]],["медуза",200,["медузу"]],["косатка",160,["касатка"]],["мурена",120,["мурену"]],["скат",80,["ската"]],["морской еж",40,["морского ежа"]]]},
{q:"Какое морское животное чаще всего кажется людям дружелюбным?",a:[["дельфин",240,["дельфина"]],["морской котик",200,["котик"]],["тюлень",160,["тюленя"]],["кит",120,["кита"]],["морская черепаха",80,["черепаха"]],["пингвин",40,["пингвина"]]]},
{q:"Какого морского обитателя чаще всего можно увидеть в аквариуме?",a:[["рыбу",240,["рыбки","рыба"]],["акулу",200,["акула"]],["ската",160,["скат"]],["медузу",120,["медуза"]],["морского конька",80,["морской конек","морской конёк"]],["осьминога",40,["осьминог"]]]},
{q:"Что чаще всего ищут дети на морском берегу?",a:[["ракушки",240,["раковины"]],["камни",200,["камешки"]],["крабов",160,["краб"]],["морские звезды",120,["морскую звезду"]],["медуз",80,["медуза"]],["водоросли",40,["водоросль"]]]},
{q:"Какое морское животное чаще всего ассоциируется с огромным размером?",a:[["кит",240,["синий кит"]],["акула",200,["китовая акула"]],["косатка",160,["касатка"]],["скат",120,["манта"]],["осьминог",80,["гигантский осьминог"]],["морж",40,["моржа"]]]},
{q:"Какое морское животное чаще всего ассоциируется с восемью щупальцами?",a:[["осьминог",240,["осьминога"]],["кальмар",200,["кальмара"]],["медуза",160,["медузу"]],["каракатица",120,["каракатицу"]],["морская звезда",80,["звезда"]],["актиния",40,["актинию"]]]},
{q:"Какое морское животное чаще всего ассоциируется с панцирем?",a:[["краб",240,["краба"]],["морская черепаха",200,["черепаха"]],["лобстер",160,["омар"]],["рак-отшельник",120,["отшельник"]],["креветка",80,["креветку"]],["морской еж",40,["морского ежа"]]]},
{q:"Какое морское животное чаще всего ассоциируется с ядом?",a:[["медуза",240,["медузу"]],["морская змея",200,["змея"]],["рыба-камень",160,["рыба камень"]],["голубокольчатый осьминог",120,["осьминог"]],["скат",80,["ската"]],["морской еж",40,["морского ежа"]]]},
{q:"Какое морское животное чаще всего ассоциируется с коралловым рифом?",a:[["рыба-клоун",240,["рыба клоун","немо"]],["тропическая рыба",200,["рыбка"]],["морская черепаха",160,["черепаха"]],["скат",120,["ската"]],["акула",80,["акулу"]],["морская звезда",40,["звезда"]]]},
{q:"Какое животное чаще всего ассоциируется с ночным образом жизни?",a:[["сова",240,["сову"]],["летучая мышь",200,["летучую мышь"]],["енот",160,["енота"]],["еж",120,["ёж"]],["лиса",80,["лису"]],["кошка",40,["кот"]]]},
{q:"Какое животное чаще всего ассоциируется с зимой?",a:[["белый медведь",240,["полярный медведь"]],["пингвин",200,["пингвина"]],["северный олень",160,["олень"]],["песец",120,["песца"]],["тюлень",80,["тюленя"]],["заяц",40,["беляк"]]]},
{q:"Какое животное чаще всего ассоциируется с пустыней?",a:[["верблюд",240,["верблюда"]],["скорпион",200,["скорпиона"]],["змея",160,["змею"]],["ящерица",120,["ящерицу"]],["фенек",80,["лиса фенек"]],["тушканчик",40,["тушканчика"]]]},
{q:"Какое животное чаще всего ассоциируется с джунглями?",a:[["обезьяна",240,["обезьяну"]],["тигр",200,["тигра"]],["попугай",160,["попугая"]],["змея",120,["змею"]],["ягуар",80,["ягуара"]],["слон",40,["слона"]]]},
{q:"Какое животное чаще всего ассоциируется с фермой?",a:[["корова",240,["корову"]],["курица",200,["курицу"]],["свинья",160,["свинью"]],["лошадь",120,["конь"]],["овца",80,["овцу"]],["коза",40,["козу"]]]},
{q:"Какое животное чаще всего ассоциируется с преданностью человеку?",a:[["собака",240,["пес","пёс"]],["лошадь",200,["конь"]],["кошка",160,["кот"]],["дельфин",120,["дельфина"]],["попугай",80,["попугая"]],["слон",40,["слона"]]]},
{q:"Какое животное чаще всего ассоциируется с хорошей памятью?",a:[["слон",240,["слона"]],["дельфин",200,["дельфина"]],["обезьяна",160,["шимпанзе"]],["ворон",120,["ворона"]],["собака",80,["собаку"]],["лошадь",40,["конь"]]]},
{q:"Какое животное чаще всего ассоциируется с прыжками?",a:[["кенгуру",240,[]],["лягушка",200,["лягушку"]],["заяц",160,["кролик"]],["кузнечик",120,["кузнечика"]],["дельфин",80,["дельфина"]],["коза",40,["козу"]]]},
{q:"Какое животное чаще всего ассоциируется с полосками?",a:[["зебра",240,["зебру"]],["тигр",200,["тигра"]],["енот",160,["енота"]],["скунс",120,["скунса"]],["окунь",80,["окуня"]],["рыба-клоун",40,["рыба клоун"]]]},
{q:"Какое животное чаще всего ассоциируется с пятнами?",a:[["леопард",240,["леопарда"]],["жираф",200,["жирафа"]],["далматин",160,["далматинец"]],["гепард",120,["гепарда"]],["корова",80,["корову"]],["олень",40,["оленя"]]]}
];

const popCultureScript=document.createElement("script");
popCultureScript.src="popculture-questions.js";
document.head.appendChild(popCultureScript);

window.addEventListener("DOMContentLoaded",()=>{
  const oldButton=document.getElementById("newGameTop");
  if(!oldButton)return;
  const newButton=oldButton.cloneNode(true);
  oldButton.replaceWith(newButton);
  newButton.addEventListener("click",()=>{
    let seen=[];
    try{seen=JSON.parse(localStorage.getItem("seen1000Questions")||"[]")}catch(e){seen=[]}
    let animalAvailable=ANIMAL_QUESTIONS.filter(x=>!seen.includes(x.q));
    let allAvailable=QUESTIONS.filter(x=>!seen.includes(x.q));
    if(animalAvailable.length<1 || allAvailable.length<7){seen=[];animalAvailable=[...ANIMAL_QUESTIONS];allAvailable=[...QUESTIONS]}
    const first=shuffle(animalAvailable)[0];
    const restPool=allAvailable.filter(x=>x.q!==first.q);
    const rest=shuffle(restPool).slice(0,6);
    pool=[first,...rest];
    const picked=pool.map(x=>x.q);
    localStorage.setItem("seen1000Questions",JSON.stringify([...seen,...picked]));
    idx=0;score=0;active=true;feedList.innerHTML="";loadQuestion();
  });
});

window.addEventListener("DOMContentLoaded",()=>{
  const style=document.createElement("style");
  style.textContent=`
    :root{--text:#4b342f;--muted:#7c5b52;--line:rgba(112,73,61,.18)}
    body{color:var(--text)!important;background:radial-gradient(circle at 12% 8%,rgba(255,238,221,.95),transparent 32%),radial-gradient(circle at 88% 12%,rgba(255,207,181,.62),transparent 30%),linear-gradient(180deg,#f9d9c4 0%,#f6cdb7 48%,#f3d7c7 100%)!important}
    .panel{background:linear-gradient(145deg,rgba(255,248,242,.84),rgba(255,224,207,.78))!important;box-shadow:0 24px 70px rgba(120,70,50,.16)!important}
    .feed{background:linear-gradient(145deg,rgba(255,244,236,.9),rgba(249,216,199,.88))!important;box-shadow:0 24px 70px rgba(120,70,50,.13)!important}
    .pill,.secondary,.try{background:rgba(255,255,255,.42)!important;color:#4b342f!important}
    input{background:rgba(255,250,246,.8)!important;color:#4b342f!important;border-color:rgba(112,73,61,.22)!important}
    input::placeholder{color:#9c786c!important}
    .board{background:rgba(255,246,240,.82)!important;color:#4b342f!important}
    .badge{color:#6a463b!important;border-color:rgba(106,70,59,.32)!important;background:rgba(255,255,255,.35)}
    .history{margin-top:26px;padding:24px;border:1px solid var(--line);border-radius:28px;background:rgba(255,248,242,.78);box-shadow:0 20px 60px rgba(120,70,50,.12)}
    .history h2{margin:0 0 16px;font-size:28px}.history-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.history-card{padding:16px 12px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.46);text-align:center}.history-card strong{display:block;font-size:26px;margin-top:4px}.history-card small{color:var(--muted)}
    @media(max-width:640px){.history-grid{grid-template-columns:repeat(2,1fr)}}
  `;
  document.head.appendChild(style);

  const feed=document.querySelector('.feed');
  if(feed){
    const history=document.createElement('section');
    history.className='history';
    history.innerHTML='<h2>Последние игры</h2><div class="history-grid" id="historyGrid"></div>';
    feed.insertAdjacentElement('afterend',history);
  }

  function renderHistory(){
    const grid=document.getElementById('historyGrid'); if(!grid)return;
    let arr=[]; try{arr=JSON.parse(localStorage.getItem('last4Games')||'[]')}catch(e){}
    grid.innerHTML='';
    if(!arr.length){grid.innerHTML='<div style="grid-column:1/-1;color:var(--muted)">Здесь появятся результаты после завершения первой игры.</div>';return}
    arr.forEach((g,i)=>{const d=document.createElement('div');d.className='history-card';d.innerHTML=`<small>Игра ${i+1}</small><strong>${g.score}</strong><small>${g.date||''}</small>`;grid.appendChild(d)});
  }
  renderHistory();

  const originalFinish=window.finish;
  window.finish=function(){
    try{
      let arr=JSON.parse(localStorage.getItem('last4Games')||'[]');
      const now=new Date();
      arr.unshift({score:score,date:now.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'})});
      arr=arr.slice(0,4);
      localStorage.setItem('last4Games',JSON.stringify(arr));
    }catch(e){}
    renderHistory();
    return originalFinish.apply(this,arguments);
  };
});

window.addEventListener("DOMContentLoaded",()=>{
  const style=document.createElement("style");
  style.textContent=`
    :root{--text:#3d2923;--muted:#704e43;--line:rgba(86,51,40,.24);--purple:#bd6f56;--cyan:#d99a78;--green1:#b66a52;--green2:#8f4f3d}
    body{background:radial-gradient(circle at 12% 8%,rgba(242,184,151,.55),transparent 32%),radial-gradient(circle at 88% 12%,rgba(217,132,94,.34),transparent 30%),linear-gradient(180deg,#d99a78 0%,#c98265 48%,#b96f58 100%)!important}
    .logo,.newgame{background:linear-gradient(145deg,#a95e49,#d28a68)!important;color:#fff!important;box-shadow:0 10px 28px rgba(92,48,36,.18)}
    .answerbtn{background:linear-gradient(180deg,#a65d49,#874536)!important;color:#fff!important}
    .fill{background:linear-gradient(90deg,#9e5946,#d38d69)!important}
    .panel{background:linear-gradient(145deg,rgba(255,239,229,.88),rgba(238,191,166,.84))!important;border-color:rgba(86,51,40,.24)!important;box-shadow:0 24px 70px rgba(82,43,31,.19)!important}
    .feed{background:linear-gradient(145deg,rgba(249,224,210,.92),rgba(224,165,137,.88))!important;border-color:rgba(86,51,40,.22)!important;box-shadow:0 24px 70px rgba(82,43,31,.16)!important}
    .history{background:linear-gradient(145deg,rgba(250,228,216,.94),rgba(229,177,151,.9))!important;border-color:rgba(86,51,40,.22)!important;box-shadow:0 20px 60px rgba(82,43,31,.14)!important}
    .pill,.secondary,.try,.history-card{background:rgba(255,239,230,.62)!important;color:#3d2923!important;border-color:rgba(86,51,40,.18)!important}
    input{background:rgba(255,244,237,.9)!important;color:#3d2923!important;border-color:rgba(86,51,40,.24)!important}
    input::placeholder{color:#8b675b!important}
    .board{background:rgba(255,239,230,.92)!important;color:#3d2923!important;border-color:rgba(86,51,40,.2)!important}
    .badge{color:#5b372d!important;border-color:rgba(91,55,45,.34)!important;background:rgba(255,233,221,.5)!important}
    .good{color:#6a5637!important}.bad{color:#9a3f38!important}
    .feedhint{color:#704e43!important}
  `;
  document.head.appendChild(style);
  const hint=document.querySelector('.feedhint');
  if(hint) hint.textContent='подсказка: ищи неочевидный ответ ✦';
});