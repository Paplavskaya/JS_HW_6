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


// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for

const arr = [4, 2, 5, 19, 13, 0, 10];

let sumOfCubes = 0;
for(i = 0; i < arr.length; i++){
    sumOfCubes += arr[i]**3;
}
const sqrtArr = Math.sqrt(sumOfCubes);
console.log(sqrtArr);


/*Даны переменные a и b. Отнимите от a переменную b и результат 
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
c записалось положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1.*/

const difference = (a, b) => a - b;
let c1 = Math.abs(difference(3, 5));
console.log(c1);
let c2 = Math.abs(difference(6, 1));
console.log(c2);


/*Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
сделает 01.09.2014)*/

const formating = (number, length, emptyValue) => number.toString().padStart(length, emptyValue);

const getCurrentDate = (date) => {
    const hours = formating(date.getHours(), 2, '0');
    const minutes = formating(date.getMinutes(), 2, '0');
    const seconds = formating(date.getSeconds(), 2, '0');
    const monthDate = formating(date.getDate(), 2, '0');
    const month = formating(date.getMonth(), 2, '0');
    const year = date.getFullYear(); 
    
    return `${hours}:${minutes}:${seconds} ${monthDate}.${month}.${year}`
};

let currentDate = getCurrentDate(new Date());
console.log(currentDate);


