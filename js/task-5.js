const deliveryCountry = ['китай', 'чили', 'австралия', 'индия', 'ямайка'];
const deliveryPrice = [100, 250, 170, 80, 120];

let country = prompt('Введите имя страны');
let price;
let message;

if (country === null) {
  message = 'Вы не выбрали страну!';
} else {
  let i;
  switch (country.toLowerCase()) {
    case deliveryCountry[0]:
      price = deliveryPrice[0];
      break;
    case deliveryCountry[1]:
      price = deliveryPrice[1];
      break;
    case deliveryCountry[2]:
      price = deliveryPrice[2];
      break;
    case deliveryCountry[3]:
      price = deliveryPrice[3];
      break;
    case deliveryCountry[4]:
      price = deliveryPrice[4];
      break;
    default:
      price = 0;
      message = `В ${country} доставка не доступна`;
      break;
  }
}

alert(
  (message =
    price > 0
      ? `Доставка в ${country} будет стоить ${price} кредитов`
      : message),
);
