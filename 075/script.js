"use strict";
// Последнее, что хочет видеть Алексей на своем сайте - это система оценок работы кофейни. 
// Владельцу необходимо знать мнение клиентов, чтобы исправлять недочеты в своей работе.
// Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут 
// хранится оценки клиентов кофейни. Также создайте функцию askClientToGiveEstimation, которая 
// должна выводить сообщение “Как вы оцениваете нашу кофейню от 1 до 10?” через prompt. 
// Конечный результат, который введет пользователь, должен быть типом данных number. Если 
// было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, иначе 
// же никаких действий не совершайте. Для добавления оценок вызовите функцию 
// askClientToGiveEstimation 5 раз. Рекомендуется это сделать через цикл for. После 
// того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательных 
// оценки. Положительной оценкой является число больше 5, отрицательной - число, меньшее за 5 
// либо равное 5. Выведите через alert сообщение “Всего положительных оценок: goodEstimations; 
// Всего отрицательных оценок: notGoodEstimations”, где goodEstimations - количество 
// положительных оценок, а notGoodEstimations - количество отрицательных оценок. Условия: 1. 
// В решение должен быть использован метод массивов filter.
const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const clientEstimationString = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    const clientEstimation = Number(clientEstimationString.trim());
    if (clientEstimation >= 1 && clientEstimation <= 10) {
        clientsEstimations.push(clientEstimation);
    }
}

for (let i = 0; i < 5; i += 1) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5);
const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5);

console.log(goodEstimations, notGoodEstimations)

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);





