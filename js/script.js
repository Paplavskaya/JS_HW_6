// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

const originalStr = 'aaa@bbb@ccc';
const replacedStr = originalStr.replace(/@/g, '!');
console.log(replacedStr);


// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 

const strDate = '2025-12-31';
const arrDate = strDate.split('-');
const newDate = `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
console.log(newDate);


// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
// «javascript» тремя разными способами (через substr, substring, slice).

const str = 'Я учу javascript!';

console.log(str.slice(2, -1));
console.log(str.substring(2, str.length-1));
console.log(str.substr(2, 14));



