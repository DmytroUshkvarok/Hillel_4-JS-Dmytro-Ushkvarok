'use strict';

//  Task 1

let number1 = getNumber('1');
let number2 = getNumber('2');

console.log( `Sum1 is ${returnSumOfNumbers1(number1, number2)}` );
console.log( `Sum2 is ${returnSumOfNumbers2(number1, number2)}` );
console.log( `Sum3 is ${returnSumOfNumbers3(number1, number2)}` );

function getNumber(order) {
    let number = prompt(`Enter number ${order} please`, ``);
    
    while ( isNaN(number) || number < 0 || number === 'Infinity' || number === 'NaN' || number === null ) {
        number = prompt(`Enter number >= 0 please`, ``);
    }
    
    console.log( `Number ${order} is ${number}` );
    
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

function getMaxStringLength(string1, string2) {
    return (string1.length > string2.length)
        ? string1.length
        : string2.length;
}

// Method 1 (fast)

function returnSumOfNumbers1(string1, string2) {
    let i;
    let longestString = returnLongestString(string1, string2);
    let shortestString = returnShortestString(string1, string2);
    let maxLength = getMaxStringLength(string1, string2);
    let longestStringLength = maxLength;
    let shortestStringLength = shortestString.length;
    
    shortestString = ' '.repeat(longestStringLength - shortestStringLength) + shortestString;
    let numArray1 = longestString.split('');
    let numArray2 = shortestString.split('');
    let newArray = [];
    let bonusUnit = 0;
    
    for (i = maxLength - 1; i >= 0; i--) {
        let sum = String(+numArray1[i] + +numArray2[i] + bonusUnit);
        
        if (sum > 9) {
            newArray[i] = sum[1];
            bonusUnit = 1;
            continue;
        }
        
        newArray[i] = sum;
        bonusUnit = 0;
    }
    
    if (bonusUnit) {
        newArray.unshift('1');
    }
    
    return newArray.join('');
}

// Method 2 (slow)

function returnSumOfNumbers2(string1, string2) {
    let i;
    let reversedNumArray1 = string1.split('').reverse();
    let reversedNumArray2 = string2.split('').reverse();
    let maxLength = getMaxStringLength(string1, string2);
    let newReversedArray = [];
    let bonusUnit = 0;
    
    for (i = 0 ; i < maxLength; i++) {
        let sum = String( +(reversedNumArray1[i] || 0) + +(reversedNumArray2[i] || 0) + bonusUnit );
        
        if (sum > 9) {
            newReversedArray[i] = sum[1];
            bonusUnit = 1;
            continue;
        }
        
        newReversedArray[i] = sum;
        bonusUnit = 0;
    }
    
    if (bonusUnit) newReversedArray.push('1');
    
    return newReversedArray.reverse().join('');
}


// Method 3
function getMinStringLength(string1, string2) {
    return (string1.length < string2.length)
        ? string1.length
        : string2.length;
}

function returnSumOfNumbers3(string1, string2) {
    let i;
    let longestString = returnLongestString(string1, string2);
    let shortestString = returnShortestString(string1, string2);
    let lengthOfMinString = getMinStringLength(string1, string2);
    let endingPartOfLongestString = longestString.substring(longestString.length - lengthOfMinString);
    let endingPartOfLongestArray = endingPartOfLongestString.split('');
    let shortestArray = shortestString.split('');
    let startingPartOfLongestArray = longestString.split('', longestString.length - lengthOfMinString);
   
    
    let auxiliaryArrayOfLowerDigits = [];
    let auxiliaryArrayOfHigherDigits = [];
    let bonusUnit = 0;
    
    for (i = lengthOfMinString - 1; i >= 0; i--) {
        let sum = String(+endingPartOfLongestArray[i] + +shortestArray[i] + bonusUnit);
        
        if (sum > 9) {
            auxiliaryArrayOfLowerDigits[i] = sum[1];
            bonusUnit = 1;
            continue;
        }
    
        auxiliaryArrayOfLowerDigits[i] = sum;
        bonusUnit = 0;
    }
    
    for (i = longestString.length - lengthOfMinString - 1; i >= 0; i--) {
        let sum = String(+startingPartOfLongestArray[i] + bonusUnit);
    
        if (sum > 9) {
            auxiliaryArrayOfHigherDigits[i] = sum[1];
            bonusUnit = 1;
            continue;
        }
    
        auxiliaryArrayOfHigherDigits[i] = sum;
        bonusUnit = 0;
    }
    
    if (bonusUnit) {
        auxiliaryArrayOfHigherDigits.unshift('1');
    }
    
    return auxiliaryArrayOfHigherDigits.concat(auxiliaryArrayOfLowerDigits).join('');
    
}