// 1. Функции для работы с массивами

//         a.Написать функцию, которая принимает в качестве параметра число n.Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.
//     b.Написать функцию, которая принимает массив чисел.Результатом работы функции является сумма чисел этого массива.
//         c.Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает максимальное число.
//     d.Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает минимальное число.
//         f.Написать функцию, которая на вход получает массив целых чисел, и в качестве результата возвращает только четные числа из этого массива.Чтобы определить четность числа, воспользуйтесь оператором для подсчета остатка от деления: x % 2. Если остаток от деления числа на 2 равен 0, число будет четное.

// a)
var mas = [];
function outputMass(n) {
    for(var i=0;i<=n;i++){
        mas.push(i);
    }
}

outputMass(9);
document.write("Массив " + mas + " заполнен циклом от 0 до N");


// b)
function summElementsOfMass(massive){
    var summ = 0;
    for(var i=0; i<massive.length; i++){
        summ += massive[i];
    }
    return summ;
}
document.write("<br>Сумма чисел массива = " + summElementsOfMass(mas));   


// c)
function MaxElementOfMass(massive) {
    var max = massive[0];
    for(var i=1; i<massive.length; i++){
        if(massive[i] > max){
            max = massive[i];
        }
    }
    return max;
}
document.write("<br>Максимальное число в массиве = " + MaxElementOfMass(mas));


// d)
function MinElementOfMass(massive) {
    var min = massive[0];
    for (var i = 1; i < massive.length; i++) {
        if (massive[i] < min) {
            max = massive[i];
        }
    }
    return min;
}
document.write("<br>Минимальное число в массиве = " + MinElementOfMass(mas));


// f)

function ModMass(massive){
    for(var i = 0; i < massive.length; i++){
        if(massive[i] % 2 != 0){
            massive.splice(i,1);
        }
        
    }
    document.write("<br>Четные числа из массива = " + massive);
}

ModMass(mas);