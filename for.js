// task 1

// let num = 0
// while (num < 10) {
//     console.log(num)
//     num += 1
// }

// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

// task 2

// const num2 = 2
// for (let i = 0; i <= 20; i += 1) {
//     if (i %2 ===0) {
//         console.log(i);
//     }
//   }

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for.
// Якщо число не парне, пропустити його за допомогою continue.

// task 3

for (let i = 1; i <= 10; i += 1) {
    console.log(`${i} * 7 = ${i * 7}`);
  }

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.

// task 4

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

// task 5

for (let i = 1; i <= 10; i += 1) {
    if (i === 7) {
        break;
    } else {
    console.log(i);
    }
  }

// Створити масив із числами від 1 до 10.
// За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7.
// Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.

// task 6
let n = prompt('Ведіть число')

for (let i = 1; i <= n; i += 1) {
    if (i === n) {
        break;
    } else {
    console.log(i);
    }
  }

// Створити скрипт, який виводить на екран всі числа, які менші за n.
// Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

// task 7

for (let i = 1; i <= 20; i += 1) {
    if () {
        break;
    } else {
    console.log(i);
    }
  }

// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3.
// Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.