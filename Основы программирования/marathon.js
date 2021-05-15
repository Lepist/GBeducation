/*
Марафон по всем важным задачам по курсу "JavaScript уровень 1"

*/

/*  Задача №1
    Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
    Дополнительно, по желанию - сделать данный пример через рекурсию
*/

var a = Math.round(Math.random() * 14 + 1);

document.write("Вывод чисел от a до 15: ");
switch(a){
    case 0: document.write(a++ + " ");
    case 1: document.write(a++ + " ");
    case 2: document.write(a++ + " ");
    case 3: document.write(a++ + " ");
    case 4: document.write(a++ + " ");
    case 5: document.write(a++ + " ");
    case 6: document.write(a++ + " ");
    case 7: document.write(a++ + " ");
    case 8: document.write(a++ + " ");
    case 9: document.write(a++ + " ");
    case 10: document.write(a++ + " ");
    case 11: document.write(a++ + " ");
    case 12: document.write(a++ + " ");
    case 13: document.write(a++ + " ");
    case 14: document.write(a++ + " ");
    case 15:
        document.write(a++ + " ");
}

// При помощи рекурсии:
document.write("<br>Вывод чисел от 16 до 25: ");
function f(a){
    if(a > 25) return;
    document.write(a++ + " ");
    f(a);
}
f(a);


/*  Задача №2
    Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
        Обязательно использовать оператор return.

    Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где 
        arg1, arg2 – значения аргументов, operation – строка с названием операции. 
        В зависимости от переданного значения операции выполнить одну из арифметических операций 
        (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
function mathOperationWith2Args(arg1,arg2){
    document.write("<br><br>Input numbers: " + arg1 + arg2);
    document.write("<br>Сложение чисел = " + (arg1+arg2));
    document.write("<br>Произведение чисел = " + arg1*arg2);
    document.write("<br>Деление чисел = " + arg1/arg2);
    document.write("<br>Вычитание чисел = " + (arg1-arg2));
}
mathOperationWith2Args(2,1);

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "+":
            return arg1 + arg2;
        case "*":
            return arg1 * arg1;
        case "-":
            return arg1 - arg2;
        case "/":
            return arg1 / arg2;
    }
}
mathOperation(5,7,"+");