'use strict';

let password = prompt(`Enter your password phrase here please
Your password must include:
1) only numbers and latin letters
2) minimum 6 symbols and maximum 20 symbols
3) 1 number and 1 letter at least`, ``);

if (password === null) {
    console.log(`You have canceled password input`);
} else {
    while (validatePassword(password) !== 'VALID') {
        password = prompt(`Invalid input! See details in console logs. Retry password input please`, ``) || '';
    }
}

let testingNumber = function () {
        let number = +prompt(`In order to continue script execution You need to enter number for tests.
    In case of prime or even number script will continue it's work, if no - execution will be stopped.`, ``);
        
        while (!isNumeric(number)) {
            number = +prompt(`Enter real number please`, ``);
        }
        
        return number;
};

if (checkNumber( testingNumber() )) {
    let firstNumberForAddition = getNumberForAddition('first');
    let secondNumberForAddition = getNumberForAddition('second');
    console.log(`Result sum is ${getSum(firstNumberForAddition, secondNumberForAddition)}`);

} else {
    console.error(`Number You have entered is not prime or even so execution is stopped.`);
}

function validatePassword(string) {
    let objectOfTests = {};
    let minPasswordLength = 6;
    let maxPasswordLength = 20;
    
    objectOfTests.isLengthGood = string.length > minPasswordLength && string.length < maxPasswordLength;
    if (objectOfTests.isLengthGood) {
    
        objectOfTests.containOnlyNumbersAndLatinLetters = function() {
            let i;
            let num;
            let stringToCompare = '';
            let transformedString = string.toUpperCase();
            
            for (i = 0; i < transformedString.length; i++) {
                num = transformedString.charCodeAt(i);
                
                if (num >= 48 && num <= 57) {
                    stringToCompare += string[i];
                    objectOfTests.numberExistence = true;
                    
                } else if (num >= 65 && num <= 90) {
                    stringToCompare += string[i];
                    objectOfTests.letterExistence = true;
                }
            }
            
            return stringToCompare.length === string.length;
        };
        
        if (objectOfTests.containOnlyNumbersAndLatinLetters()) {
            
            let informUser = function () {
                if (!objectOfTests.numberExistence) {
                    console.error(`Error input. You need to use 1 number at least in password! Reload page and reenter data please.`);
                }
                if (!objectOfTests.letterExistence) {
                    console.error(`Error input. You need to use 1 letter at least in password! Reload page and reenter data please.`);
                }
            };
            informUser();
            
            return objectOfTests.numberExistence
                ? objectOfTests.letterExistence
                    ? 'VALID'
                    : 'INVALID'
                : 'INVALID';
            
        } else {
            console.error(`Error input. You need to use only numbers and latin letters!
            Reload page and reenter data please.`);
            
            return 'INVALID';
        }
        
    } else {
        console.error(`Error input. You need to use from 7 to 19 symbols in password!
        Reload page and reenter data please.`);
        
        return 'INVALID';
    }
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
    
    while (isNaN(number) || number < 0 || number === 'Infinity' || number === 'NaN' || number === null) {
        number = prompt(`Enter ${order} number >= 0 please`, ``);
    }
    
    return number;
}

function getSum(number1, number2) {
    let i;
    let digitOfNum1;
    let digitOfNum2;
    let sum;
    let resultArray = [];
    let bonusUnit = 0;
    let numArray1 = number1.split('');
    let numArray2 = number2.split('');
    
    let getMaxArrayLength = function (array1, array2) {
        return (array1.length > array2.length)
            ? array1.length
            : array2.length;
    };
    
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