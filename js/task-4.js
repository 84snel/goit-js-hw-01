const credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt('Введите желаемое к покупке количество дроидов');

if (quantityDroid !== null) {
  quantityDroid = Math.ceil(Number(quantityDroid));
  let totalPrice = quantityDroid * pricePerDroid;
  let message =
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${quantityDroid} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`;
  console.log(message);
} else {
  console.log('Отменено пользователем!');
}
