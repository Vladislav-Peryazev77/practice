"use strict";
// Дан следующий массив с работниками:
let employees = [
	{name: 'employee1', age: 30, salary: '400$'},
	{name: 'employee2', age: 31, salary: '500$'},
	{name: 'employee3', age: 32, salary: '600$'},
];
// Выведите элементы этого массива в виде HTML таблицы.
// Модифицируйте предыдущую задачу так, чтобы по клику на 
// любую ячейку с возрастом ее содержимое увеличивалось на 1.
// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с 
// зарплатой ее содержимое увеличивалось на 10%.
let table = document.querySelector('table');

for ( let employee of employees) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = employee.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = employee.age;
    tr.appendChild(td2);

    td2.addEventListener('click', function() {
        td2.textContent++;
    });

    let td3 = document.createElement('td');
    td3.textContent = employee.salary;
    tr.appendChild(td3);

    td3.addEventListener('click', function() {
        td3.textContent = Math.round(+td3.textContent + (0.1 * td3.textContent));
    });

    table.appendChild(tr);
}








