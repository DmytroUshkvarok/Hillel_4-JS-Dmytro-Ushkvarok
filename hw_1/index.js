'use strict';

//  1. Написать 5 вариантов записи строки: It's beautiful day. I like "free day".

console.log('Написать 5 вариантов записи строки: It\'s beautiful day. I like "free day".\n\n');

console.log('It\'s beautiful day. I like "free day".');       // Сперва попробовал с разнымитипами кавычек
console.log("It's beautiful day. I like \"free day\".");
console.log("It's beautiful day. " + 'I like "free day".');
console.log(`It's beautiful day. I like "free day".`);
console.log(`It's beautiful day.` + ' I like "free day".');

//  С применением различных методов

let str = 'It\'s beautiful day. I like "free day".';

console.log('1) Разделить строку пополам');
console.log( str.slice(0, str.length / 2) + '\n' + str.slice (str.length / 2 + 1) );

console.log('2) Записать строку наоборот');
console.log( str.split('').reverse().join('') );

console.log('3) Поменять порядок слов в строке');
let arr = str.split(' ');
let tempArray = [];
tempArray.push(arr[0], arr[5], arr[6], arr[3], arr[4],  arr[1], arr[2]);
tempArray = tempArray.join(' ');
console.log(tempArray);

console.log('4) Вывести каждое слово в новой строке');
divider(str);

function divider(string) {
  let arrayFromWords = string.split(' ');

  for (let i = 0; i < arrayFromWords.length; i++) {
    console.log( arrayFromWords[i] );
  }
}

console.log('5) Вывести всю строку с помощью кодового отображения');
console.log( returnStringInCode(str) );

function returnStringInCode(string) {
  let arrayOfCodes = [];

  for (let i = 0; i < string.length; i++) {
    arrayOfCodes.push( string.codePointAt(i) );
  }

  return arrayOfCodes.join('');
}


//  2. Написать правильное умножение двух дробных чисел (например, 5.45 и 8.3) => 5.45 * 8.3 === 5.45*8.3.

console.log('\nНаписать правильное умножение двух дробных чисел (например, 5.45 и 8.3) => 5.45 * 8.3 === 5.45*8.3.\n\n');

console.log('5.45 * 8.3 = ' + multiplyFloat(5.45, 8.3) );

function multiplyFloat(num1, num2) {
  let str1 = String(num1);
  let str2 = String(num2);

  let zeros = function (str) {
    return str.length - str.indexOf('.') - 1;
  };

  let rate1 = zeros(str1);
  let rate2 = zeros(str2);

  if (rate1 > rate2) {
    return num1 * Math.pow(10, rate1) * num2 * Math.pow(10, rate1) / Math.pow(10, 2 * rate1);
  }

  return num1 * Math.pow(10, rate2) * num2 * Math.pow(10, rate2) / Math.pow(10, 2 * rate2);
}

//  3. "string" + 2 => NaN исправить :)

console.log('\n"string" + 2 => NaN исправить :)\n\n');

console.log(+"string" + 2);
