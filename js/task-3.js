const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const getPass = prompt('Введите пароль');

if (getPass !== null) {
  message =
    getPass === ADMIN_PASSWORD
      ? 'Добро пожаловать!'
      : 'Доступ запрещен, неверный пароль!';
} else {
  message = 'Отменено пользователем!';
}

alert(message);
