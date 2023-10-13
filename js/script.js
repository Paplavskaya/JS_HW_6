// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

const originalStr = 'aaa@bbb@ccc';
const replacedStr = originalStr.replace(/@/g, '!');
console.log(replacedStr);


// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 

const strDate = '2025-12-31';
const arrDate = strDate.split('-');
const newDate = `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
console.log(newDate);


