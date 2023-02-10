"use strict";
// Задание #3 Представьте, что у вас есть друг Алексей, который является владельцем кофейни. 
// Он хочет сделать сайт для этой кофейни, чтобы люди могли заказывать доставку кофе на дом. 
// Самая главная функция, которую хочет видеть Алексей, это поиск кофе по названию. Ваш друг 
// просит вас помочь ему с разработкой сайта. Изначально у вас есть массив coffees, в котором
//  хранятся все виды кофе, которые есть в кофейне у Алексея. Напитки распределены в порядке 
//  популярности среди клиентов. Т.е. кофе “Latte” - самый популярный.
// const coffees = ['Latte', 'Cappuccino', 'Americano']; С помощью функции prompt вам необходимо 
// запрашивать название кофе. Передайте в prompt сообщение “Поиск кофе по названию:”. Сохраните 
// значение, которое ввел пользователь в переменную coffeeName. Если введенное пользователем название
//  кофе существует, то отобразите сообщение с помощью alert “Держите ваш любимый кофе coffee. 
//  Он number-й по популярности в нашей кофейне.”, где coffee - название найденного кофе, 
//  number - номер найденного кофе в массиве coffees. Если же кофе не был найден, то 
//  отобразите сообщение “К сожалению, такого вида кофе нет в наличии”. Условия: 1. 
//  Название кофе должно быть регистронезависимым. Т.е. если пользователь напечатает 
//  “lATte”, то должен показаться результат с кофе “Latte” 2. Необходимо использовать 
//  findIndex.
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt('Поиск кофе по названию:');
function storkCoffeeCheck(coffe) {
    const checkedCoffeeName = coffees.find((coffeName) => {
        return coffeName === coffe;
    });
    return checkedCoffeeName;
}
function checkPostitonOnTopCoffee(coffe) {
    const topCoffee = coffees.findIndex((coffeName) => {
        return coffeName === coffe;
    });
    return topCoffee;
}
let correctCoffeeName = coffeeName.slice(0, 1).toUpperCase() + coffeeName.slice(1).toLowerCase();
alert(`Держите ваш любимый кофе ${storkCoffeeCheck(correctCoffeeName)}. Он ${checkPostitonOnTopCoffee(correctCoffeeName) + 1}-ый по популярности в нашей кофейне.`); 








