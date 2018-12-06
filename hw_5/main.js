'use strict';

let password = prompt(`Enter your password phrase here please
Your password must include:
1) only numbers and latin letters
2) minimum 6 symbols and maximum 20 symbols
3) 1 number and 1 letter at least`, ``);

while (!checkStatusOfPasswordValidation( validatePassword(password) )) {
    password = prompt(`Invalid input! See details in console logs. Retry input please`, ``);
}

let testingNumber = getNumberForTests();

if ( checkNumber(testingNumber) ) {
    let firstNumberForAddition = getNumberForAddition('first');
    let secondNumberForAddition = getNumberForAddition('second');
    console.log( `Result sum is ${returnSumOfNumbers (firstNumberForAddition, secondNumberForAddition)}` );
    
} else {
    console.error(`Number You have entered is not prime or even so execution is stopped.`);
}

function checkStatusOfPasswordValidation(string) {
    return string === 'VALID';
}

function checkAllValuesInObjectForTrue(object) {
    let key;
    
    for (key in object) {
        if (object[key] !== true) {
            
            return false;
        }
    }
    
    return true;
}

function validatePassword(testingString) {
    let i;
    let num;
    let minPasswordLength = 6;
    let maxPasswordLength = 20;
    let objectOfTests = {};
    
    objectOfTests.lengthIsGood = testingString.length > minPasswordLength && testingString.length < maxPasswordLength;
    let stringToCompare = '';
    let testingStringInUpperCase = testingString.toUpperCase();
    
    for (i = 0; i < testingStringInUpperCase.length; i++) {
        num = testingStringInUpperCase.charCodeAt(i);
        
        if (num >= 48 && num <= 57) {
            stringToCompare += testingString[i];
            objectOfTests.numberExistence = true;
            
        } else if (num >= 65 && num <= 90) {
            stringToCompare += testingString[i];
            objectOfTests.letterExistence = true;
        }
    }
    
    objectOfTests.containOnlyNumbersAndLatinLetters = stringToCompare.length === testingString.length;
    
    informUser(objectOfTests.containOnlyNumbersAndLatinLetters, objectOfTests.numberExistence,
        objectOfTests.letterExistence, objectOfTests.lengthIsGood);
    
    return (checkAllValuesInObjectForTrue(objectOfTests))
        ? 'VALID'
        : 'INVALID';
}

// Прошу строго не судить за царство ифов в этой функции ))

function informUser(containOnlyNumbersAndLatinLetters, numberExistence, letterExistence, lengthIsGood) {
    if (!containOnlyNumbersAndLatinLetters) {
        console.error(`Error input. You need to use only numbers and latin letters!`);
    }
    if (!lengthIsGood) {
        console.error(`Error input. You need to use from 7 to 19 symbols in password!`);
    }
    if (!numberExistence) {
        console.error(`Error input. You need to use 1 number at least in password!`);
    }
    if (!letterExistence) {
        console.error(`Error input. You need to use 1 letter at least in password!`);
    }
}

function getNumberForTests() {
    let number = +prompt(`In order to continue script execution You need to enter number for tests.
    In case of prime or even number script will continue it's work, if no - execution will be stopped.`, ``);
    
    while (!isNumeric(number)) {
        number = +prompt(`Enter real number please`, ``);
    }
    
    return number;
}

function checkNumber(number) {
    return isEven(number) || isPrime(number);
}

function isPrime(number) {
    let i;
    
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            
            return false;
        }
    }
    
    return number >= 2;
}

function isEven(number) {
    return (number % 2 === 0 && number !== 0);
}

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function getNumberForAddition(order) {
    let number = prompt(`Enter ${order} number for sum please`, ``);
    
    while ( isNaN(number) || number < 0 || number === 'Infinity' || number === 'NaN' || number === null ) {
        number = prompt(`Enter ${order} number >= 0 please`, ``);
    }
    
    return number;
}

function returnLongestString(string1, string2) {
    return (string1.length > string2.length)
        ? string1
        : string2;
}

function returnShortestString(string1, string2) {
    return (string1.length > string2.length)
        ? string2
        : string1;
}

function returnSumOfNumbers(string1, string2) {
    let i;
    let longestString = returnLongestString(string1, string2);
    let shortestString = returnShortestString(string1, string2);
    let longestStringLength = longestString.length;
    let shortestStringLength = shortestString.length;
    
    shortestString = ' '.repeat(longestStringLength - shortestStringLength) + shortestString;
    let longestArray = longestString.split('');
    let shortestArray = shortestString.split('');
    let auxiliaryArray = [];
    let bonusUnit = 0;
    
    for (i = longestStringLength - 1; i >= 0; i--) {
        let sum = String(+longestArray[i] + +shortestArray[i] + bonusUnit);
        
        if (sum > 9) {
            auxiliaryArray[i] = sum[1];
            bonusUnit = 1;
            continue;
        }
        
        auxiliaryArray[i] = sum;
        bonusUnit = 0;
    }
    
    if (bonusUnit) {
        auxiliaryArray.unshift('1');
    }
    
    return auxiliaryArray.join('');
}