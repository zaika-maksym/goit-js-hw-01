console.log('--- Задание - 3');


let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let userPassword = prompt('Введите пароль');


if (userPassword === null) {
   message = 'Отменено пользователем!'
} else if (userPassword === ADMIN_PASSWORD) {
   message = 'Добро пожаловать!'

} else {
    message = 'Доступ запрещен, неверный пароль!'
}


alert (message)

console.log(message);
