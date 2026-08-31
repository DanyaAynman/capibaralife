(()=>{'use strict';const ANSWERS=new Map([
['Как назывался торговый путь из Скандинавии в Византию через Русь?','Путь из варяг в греки'],
['Как называется человек, который руководит съёмкой фильма?','Режиссёр'],
['Какое животное является крупнейшим представителем семейства кошачьих?','Тигр'],
['Как называется галактика, в которой находится Солнечная система?','Млечный путь'],
['Какой пролив разделяет Европу и Африку?','Гибралтарский пролив'],
['Как называется самый низкий мужской певческий голос?','Бас'],
['Сколько игроков одной команды одновременно находится на футбольном поле?','11'],
['Как называется итальянское блюдо из риса кремовой консистенции?','Ризотто'],
['Как расшифровывается GPS по смыслу?','Глобальная система позиционирования'],
['Как звали скандинавского бога грома?','Тор'],
['Как называется процесс превращения гусеницы в бабочку?','Метаморфоз'],
['Как называется единица силы в системе СИ?','Ньютон']
]);let finalQuestion='',correct='';function capture(){const stage=document.getElementById('finalStage');if(!stage)return;const q=stage.querySelector('.qText')?.textContent?.trim();if(q&&ANSWERS.has(q)){finalQuestion=q;correct=ANSWERS.get(q)}}function render(){capture();const final=document.getElementById('final');if(!final||final.classList.contains('hidden')||!correct)return;let box=document.getElementById('finalCorrectAnswer');if(!box){box=document.createElement('div');box.id='finalCorrectAnswer';box.className='answerReveal';box.style.fontSize='22px';box.style.fontWeight='900';box.style.margin='16px auto 22px';const podium=document.getElementById('podium');final.insertBefore(box,podium||null)}box.innerHTML='<div style="font-size:13px;opacity:.75;margin-bottom:6px">ПРАВИЛЬНЫЙ ОТВЕТ ФИНАЛА</div><div>'+correct+'</div>'}new MutationObserver(()=>{capture();render()}).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});document.addEventListener('DOMContentLoaded',()=>{capture();render()})})();