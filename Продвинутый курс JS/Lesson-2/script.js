function Person(firstName, lastName, year){
    this.name = firstName;
    this.family = lastName;
    this.year = year;
    this.calcAge = () => console.log(new Date().getFullYear() - this.year);
}
let user = new Person('Иван','Иванов',1990);
// user.test = 1;
// user.__proto__.test = 2;
// // user.calcAge();
// console.log(user.test); // Вывод: 1, JS смотрит сверху вниз и выводит первое свойство test, какое первое найдет, такое и выведет

function Teacher(firstName,lastName,year,subject){
    Person.call(this,firstName,lastName,year);
    this.subject = subject;
}
let t = new Teacher('Василий','Васильев',1970,'математика');
console.log(t);
// 0:50:10 вебинар

