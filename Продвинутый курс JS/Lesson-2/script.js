// function Person(firstName, lastName, year){
//     this.name = firstName;
//     this.family = lastName;
//     this.year = year;
//     this.calcAge = () => console.log(new Date().getFullYear() - this.year);
// }
// let user = new Person('Иван','Иванов',1990);
// // user.test = 1;
// // user.__proto__.test = 2;
// // // user.calcAge();
// // console.log(user.test); // Вывод: 1, JS смотрит сверху вниз и выводит первое свойство test, какое первое найдет, такое и выведет

// function Teacher(firstName,lastName,year,subject){
//     Person.call(this,firstName,lastName,year);
//     this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.construct = Person;
// let t = new Teacher('Василий','Васильев',1970,'математика');
// console.log(t);



/* ES6 ООП */
class Person{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    calcAge(){
        return new Date().getFullYear() - this.year;
    }
}

const man1 = new Person('Владимир',1990);
console.log('Пользователю ' + man1.name + man1.calcAge()+ ' лет');