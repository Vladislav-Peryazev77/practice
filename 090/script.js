// "use strict";
// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь метод getSalary(), 
// который будет выводить зарплату работника. Зарплата - это произведение (умножение)
//  ставки rate на количество отработанных дней days.
class Worker {
    #name
    #surname
    #rate
    #days
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    get getName() {
        return this.#name;
    }
    get getSurname() {
        return this.#name;
    }
    get getRate() {
        return this.#name;
    }
    get getDays() {
        return this.#name;
    }
    get getSalary() {
        return this.rate * this.days;
    }
}
// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все 
// его
//  свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь 
//  будет работать так:
const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31


