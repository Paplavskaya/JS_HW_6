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


