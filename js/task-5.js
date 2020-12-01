console.log('--- 3адание - 5')

let countryDelivery = prompt('Укажите страну доставки');
let countryName;
let message;
let price = 0;
const china = 'Китай'
const chili = 'Чили' 
const australia = 'Австралия'
const india = 'Индия'
const jamaica = 'Ямайка'

if (countryDelivery === null) {
    message = 'Отменено пользователем!'
} else {
    countryName = countryDelivery[0].toUpperCase() + countryDelivery.slice(1).toLowerCase();
    switch (countryName) {
        case china: 
            price = 100;
            break
        case chili:
            price = 250;
            break
        case australia:
            price = 170;
            break
        case india:
            price = 80;
            break
        case jamaica:
            price = 120;
            break
        default: 
           message = 'В вашей стране доставка не доступна'
    }
}

if (price > 0) {
    message = `Доставка в ${countryName} будет стоить ${price} кредитов`
}

alert (message)
console.log(message);