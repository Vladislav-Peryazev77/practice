"use strict";
class User {
	#age;
	
	setAge(age) {
		this.#age = age;
	}
	getAge() {
		return this.#age;
	}
}
class Student extends User {
	incAge() {
		let age = this.getAge();
		age++;
		this.setAge(age);
	}
}


const student = new Student;
student.setAge(20);
console.log(student.getAge());
console.log(student.incAge());
console.log(student.getAge());




