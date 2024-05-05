"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b**2 - 4 * a * c;

  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }

  else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка на числовые значения
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
}
if (isNaN(contribution)) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
}
if (isNaN(amount)) {
    return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
}
if (isNaN(countMonths)) {
    return `Параметр "Срок кредита" содержит неправильное значение "${countMonths}"`;
}

// Преобразование процентной ставки в дробное число
const monthlyInterestRate = percent / 100 / 12;

// Расчет тела кредита
const creditBody = amount - contribution;

// Расчет ежемесячного платежа
const monthlyPayment = creditBody * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));

// Расчет общей суммы к оплате
const totalAmount = monthlyPayment * countMonths;

// Округление до двух знаков после запятой
const roundedTotalAmount = Number(totalAmount.toFixed(2));

return roundedTotalAmount;
}