'use strict';

//  Task 1

let applesDefaultPrice = getPrice('apples');
let applesDiscount = getDiscount('apples');
let orangesIncomingPrice = getPrice('oranges');
let orangesProfit = getProfit('oranges');

let applesCurrentPrice = applesDefaultPrice - applesDefaultPrice * applesDiscount / 100;
let orangesCurrentPrice = orangesIncomingPrice + orangesIncomingPrice * orangesProfit / 100;

console.log( `1) True values of prices:\n
Current apples price is ${(Math.round(applesCurrentPrice * 100) / 100).toFixed(2)}.
Current oranges price is ${(Math.round(orangesCurrentPrice * 100) / 100).toFixed(2)}.` );

console.log( `\n2) Really comfortable prices for seller:\n
Apples price is ${(Math.ceil(applesCurrentPrice * 10) / 10).toFixed(2)}.
Oranges price is ${(Math.ceil(orangesCurrentPrice * 10) / 10).toFixed(2)}.` );

function isNumeric(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

function getPrice(goods) {
  let price = +prompt(`Enter ${goods} price please`, `12.50`);

  while (!price || !isNumeric(price) || price <= 0) {
    price = +prompt(`Enter ${goods} price > 0`, ``);
  }

  return +price.toFixed(2);
}

function getDiscount(goods) {
  let discount = +prompt(`Enter ${goods} discount in % please.`, `15`);

  while (!isNumeric(discount) || discount < 0 || discount >= 100) {
    discount = +prompt(`You need to use correct value from 0 to 100. Enter ${goods} discount again please`, ``);
  }

  return Math.round(discount);
}

function getProfit(goods) {
  let profit = +prompt(`Enter ${goods} profit in % please`, `15`);

  while (!profit || !isNumeric(profit) || profit <= 0) {
    profit = +prompt(`Enter ${goods} profit > 0`, ``);
  }

  return Math.round(profit);
}
