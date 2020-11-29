const total = 100;
let ordered = [50, 20, 80, 130];

for (let i = 0; i < ordered.length; i++) {
  console.log(
    ordered[i] <= total
      ? 'Заказ оформлен, с вами свяжется менеджер'
      : 'На складе недостаточно твоаров!',
  );
}
