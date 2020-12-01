console.log('--- Задание - 6');

let total = 0;
do {
    let input = prompt('Введите число')

    if (input === null) {
        break;
    }
 
    input = Number(input);

    if (Number.isNaN(input)) {
        alert ('Было введено не число, попробуйте еще раз')
        continue;
    }

    total += input;


} while (1);

alert (`Общая сумма чисел равна ${total}`)
console.log('Общая сумма чисел равна',total);