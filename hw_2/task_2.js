'use strict';

//  Task 2

//  Method 1

let applesPurchasePrice = `12,50`;
let priceTag = `\n\tЯблоки украинские.
\tцена: ${applesPurchasePrice}грн`;
console.log( `Method 1
${priceTag}`);

//  Method 2

applesPurchasePrice = 12.50;
applesPurchasePrice = String(applesPurchasePrice.toFixed(2));

priceTag = `\n\tЯблоки украинские.
\tцена: ${ applesPurchasePrice.substring(0, applesPurchasePrice.indexOf('.')) },` +
    `${ applesPurchasePrice.substr(applesPurchasePrice.indexOf('.') + 1, 2) }грн`;

console.log( `Method 2
${priceTag}`);