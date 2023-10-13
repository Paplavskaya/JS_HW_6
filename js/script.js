// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

const originalStr = 'aaa@bbb@ccc';
const replacedStr = originalStr.replace(/@/g, '!');
console.log(replacedStr);


