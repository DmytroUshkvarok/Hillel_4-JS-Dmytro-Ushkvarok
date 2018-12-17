'use strict';

console.log( checkNumber(7) );
console.log( checkNumber(2) );
console.log( checkNumber(0) );
console.log( checkNumber(-10) );

function checkNumber(number) {
    let arrayOfResults = [];
    
    if (number === 2) {
        arrayOfResults.push(true, true, false);
        return arrayOfResults;
    } else {
        isPrime(number)
            ? arrayOfResults.push(true, false, false)
            : isDividedTen(number)
            ? arrayOfResults.push(false, true, true)
            : isEven(number)
                ? arrayOfResults.push(false, true, false)
                : arrayOfResults.push(false, false, false);
    
        return arrayOfResults;
    }
}

function isPrime(number) {
    let i;
    
    if (number < 2) {
        return false;
    }
    
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function isEven(number) {
    return (number % 2 === 0 && number !== 0);
}

function isDividedTen(number) {
    return (number % 10 === 0 && number !== 0);
}


