'use strict';

//  Task 1

let applesPrice = getPrice('apples purchase');
let applesDiscount = getDiscount('apples');

generateAndPrintPriceTag(applesPrice, applesDiscount);

function isNumeric(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

function getPrice(goods) {
  let price = +prompt(`Enter ${goods} price please`, `12.50`);

  while (!price || !isNumeric(price) || price <= 0) {
    price = +prompt(`Enter ${goods} price > 0`, ``);
  }

  return price;
}

function getDiscount(goods) {
  let discount = +prompt(`Enter ${goods} discount in % please.`, `15`);

  while (!isNumeric(discount) || discount < 0 || discount >= 100) {
    discount = +prompt(`You need to use correct value from 0 to 99. Enter ${goods} discount again please`, ``);
  }

  return Math.round(discount);
}

function generateAndPrintPriceTag(price, discount) {
  let priceTag;
  let style = [];

  if (!discount) {
    priceTag = `Яблоки украинские.\nцена: ${price.toFixed(2)}грн`;
    style = [
      'padding: 1em;',
      'background: green;',
      'text-shadow: 0 2px black;',
      'font-family: Arial, sans-serif;',
      'font-size: 1.5em;',
      'font-weight: 700;',
      'color: white;',
      'text-align: center;'
    ].join('');

    return console.log( `%c%s`, style, priceTag );
  }

  let discountValue = applesPrice * applesDiscount / 100;
  let newPrice = price - discountValue;

  priceTag = `Яблоки украинские.\n! сегодня СКИДКА ${discountValue.toFixed(2)}грн !` +
      `\nстарая цена: ${price.toFixed(2)}грн\n!  НОВАЯ ЦЕНА: ${newPrice.toFixed(2)}грн  !`;

  style = [
    'padding: .5em;',
    'background: linear-gradient( yellow, red);',
    'text-shadow: 0 2px red;',
    'font-family: TimesNewRoman, serif;',
    'font-size: 2em;',
    'font-weight: 700;',
    'color: white;',
    'display: block;',
    'text-align: center;'
  ].join('');

  return console.log( `%c%s`, style, priceTag );
}