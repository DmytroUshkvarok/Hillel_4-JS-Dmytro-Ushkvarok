'use strict';

//  Task 1

let number1 = getNumber('1');
let number2 = getNumber('2');

console.log( `Sum is ${getSum(number1, number2)}` );

function getSum(number1, number2) {
    let i;
    let digitOfNum1;
    let digitOfNum2;
    let sum;
    let resultArray = [];
    let bonusUnit = 0;
    let numArray1 = number1.split('');
    let numArray2 = number2.split('');
    let resultArrayLength = getMaxArrayLength(numArray1, numArray2) + 1;
    
    for (i = 1; i <= resultArrayLength; i++) {
        digitOfNum1 = +numArray1[numArray1.length - i] || 0;
        digitOfNum2 = +numArray2[numArray2.length - i] || 0;
        sum = digitOfNum1 + digitOfNum2 + bonusUnit;
        
        if (sum > 9) {
            resultArray[resultArrayLength - i] = sum - 10;
            bonusUnit = 1;
        } else {
            resultArray[resultArrayLength - i] = sum;
            bonusUnit = 0;
        }
    }
    
    return resultArray[0]
        ? resultArray.join('')
        : resultArray.join('').substring(1);
}

function getNumber(order) {
    let number = prompt(`Enter number ${order} please`, ``);
    
    while ( isNaN(number) || number < 0 || number === 'Infinity' || number === 'NaN' || number === null ) {
        number = prompt(`Enter number >= 0 please`, ``);
    }
    
    console.log( `Number ${order} is ${number}` );
    
    return number;
}

function getMaxArrayLength(array1, array2) {
    return (array1.length > array2.length)
        ? array1.length
        : array2.length;
}