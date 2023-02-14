"use strict";
// Вам необходимо создать функцию, которая будет работать с объектами. Назовите 
// ее handleObject. handleObject принимает в себя 3 параметра: 1. obj. Объект, с 
// которым будет работать функция 2. key. ключ объекта 3. action. Действие, 
// которое мы будем совершать над объектом Параметр action может быть 4-мя 
// значениями: 1. ‘get’. Если action равен ‘get’, то функция handleObject 
// должна вернуть значение ключа key в объекте obj. 2. ‘add’. Если action 
// равен ‘add’, то функция handleObject должна добавить новый ключ key в 
// объект object и присвоить значение пустой строки “”. Также из функции 
// необходимо возвратить обновленный объект obj. 3. ‘delete’. Если action 
// равен ‘delete’, то функция handleObject должна удалить свойство key из 
// объекта obj и возвратить обновленный объект. Если action равен любому 
// другому значению, то функция handleObject должна возвратить объект obj
const student = { name: 'Maxim', programmingLanguage: 'JavaScript', }
function handleObjects(obj, key, action) {
    if ( action === 'get') {
        return obj[key];
    } else if ( action === 'add') {
        obj[key] = '';
        return obj;
    } else if ( action === 'delete') {
        delete obj[key];
        return obj
    } else {
        return obj;
    }
}
console.log(handleObjects(student, 'name', 'delete1'));







