(()=>{'use strict';const G=window.SVOYA_BANK_V26||window.SVOYA_BANK_V25||window.SVOYA_BANK_V24||window.SVOYA_BANK_V23;if(!G)return;const C=(q,a,s)=>[q,a,'commons',s];const extra={
'Животные':[C('Какое животное изображено?',['Лев'],'Panthera leo lion'),C('Какое животное изображено?',['Кенгуру'],'Macropus kangaroo animal')],
'Русские народные сказки':[C('Какой сказочный персонаж изображён на иллюстрации?',['Жар-птица','Жар птица'],'Firebird Russian fairy tale illustration'),C('Какой богатырь изображён на картине?',['Илья Муромец'],'Ilya Muromets Vasnetsov bogatyr')],
'География':[C('Какая известная гора изображена?',['Фудзи','Фудзияма'],'Mount Fuji Japan'),C('Какой материк показан на карте?',['Южная Америка'],'South America map')],
'Природа':[C('Какое природное явление изображено?',['Цунами'],'tsunami wave'),C('Какое природное явление изображено?',['Град'],'hail weather')],
'Разное':[C('Какой предмет изображён?',['Термометр'],'thermometer'),C('Какой прибор изображён?',['Барометр'],'barometer instrument')],
'Еда и напитки':[C('Какое блюдо изображено?',['Ризотто'],'risotto dish'),C('Какой десерт изображён?',['Безе','Меренга'],'meringue dessert')],
'Города и страны':[C('Какой город изображён?',['Афины'],'Acropolis Athens'),C('Какой город изображён?',['Прага'],'Prague Castle Charles Bridge')],
'Домашние и фермерские животные':[C('Какое фермерское животное изображено?',['Индюк','Индейка'],'domestic turkey bird'),C('Какое фермерское животное изображено?',['Гусь'],'domestic goose')],
'Морские и речные животные':[C('Какое морское животное изображено?',['Акула'],'shark underwater'),C('Какое морское животное изображено?',['Китовая акула'],'whale shark')],
'Домашние животные':[C('Какой домашний питомец изображён?',['Канарейка'],'canary pet bird'),C('Какой домашний питомец изображён?',['Шиншилла'],'chinchilla pet')]
};for(const name of G.roundNames.flat()){const bank=G.banks[name]||[],videos=bank.filter(q=>q[2]==='video').length;const clean=bank.filter(q=>q[2]!=='video'&&q[2]!=='audio');const add=(extra[name]||[]).slice(0,Math.max(2,videos));G.banks[name]=[...clean,...add].slice(0,25)}window.SVOYA_BANK_V29=G;window.SVOYA_BANK_V26=G;window.SVOYA_BANK_V23=G})();