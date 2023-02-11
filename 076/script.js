"use strict";
// Необходимо посчитать сумму кубов всех чисел в массиве. Например, 
// для массива [1, 5, 9] должен быть следующий результат: 
// 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855 Решите данную задачу 4-мя способами: 
// 1. Через цикл for 
// 2. Через цикл for of 
// 3. Через метод forEach 
// 4. Через метод reduce 
// Для данного массива numbers сумма кубов должна равняться 1158411.
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

1./*
for ( let i = 0 ; i < numbers.length; i++) {
    sum += numbers[i] ** 3;
}
console.log(sum);
*/

2./*
for ( let num of numbers) {
    sum += num ** 3;
}
console.log(sum);
*/
3./*
numbers.forEach((num) => {
    sum += num ** 3;
});
console.log(sum);
*/
4./*
const sum = numbers.reduce((acc, num) => {
    return acc + num ** 3;
});
console.log(sum);
*/





