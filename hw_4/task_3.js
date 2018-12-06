'use strict';

console.log( checkNumber(7) );
console.log( checkNumber(-10) );

function checkNumber(number) {
    let arrayOfResults = [];
    
    if (number === 2) {
        arrayOfResults.push(true, true, false);
        
        return arrayOfResults;
    }
    
    isPrime(number)
        ? arrayOfResults.push(true, false, false)
        : isDividedTen(number)
        ? arrayOfResults.push(false, true, true)
        : isEven(number)
            ? arrayOfResults.push(false, true, false)
            : arrayOfResults.push(false, false, false);
    
    return arrayOfResults;
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

function isDividedTen(number) {
    return (number % 10 === 0 && number !== 0);
}


