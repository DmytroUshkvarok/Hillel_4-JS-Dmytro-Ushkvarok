'use strict';

//  Task 2

let password = prompt(`Enter your password phrase here please
Your password must include:
1) only numbers and latin letters
2) minimum 6 symbols and maximum 20 symbols
3) 1 number and 1 letter at least`, ``);

console.log( validatePassword(password) );

function validatePassword(string) {
    let i;
    let num;
    let numberExistence;
    let letterExistence;
    let containOnlyNumbersAndLatinLetters;
    let minPasswordLength = 6;
    let maxPasswordLength = 20;
    
    let lengthIsGood = string.length > minPasswordLength && string.length < maxPasswordLength;
    let stringToCompare = '';
    let newString = string.toUpperCase();
    
    for (i = 0; i < newString.length; i++) {
        num = newString.charCodeAt(i);
        
        if (num >= 48 && num <= 57) {
            stringToCompare += string[i];
            numberExistence = true;
            
        } else if (num >= 65 && num <= 90) {
            stringToCompare += string[i];
            letterExistence = true;
        }
    }
    
    containOnlyNumbersAndLatinLetters = stringToCompare.length === string.length;
    informUser(containOnlyNumbersAndLatinLetters, numberExistence, letterExistence, lengthIsGood);
    
    return (containOnlyNumbersAndLatinLetters && numberExistence && letterExistence && lengthIsGood)
        ? 'VALID'
        : 'INVALID';
}

// Прошу строго не судить за царство ифов в этой функции ))

function informUser(containOnlyNumbersAndLatinLetters, numberExistence, letterExistence, lengthIsGood) {
    if (!containOnlyNumbersAndLatinLetters) {
        console.error(`Error input. You need to use only numbers and latin letters! Reload page and reenter data please.`);
    }
    if (!lengthIsGood) {
        console.error(`Error input. You need to use from 7 to 19 symbols in password! Reload page and reenter data please.`);
    }
    if (!numberExistence) {
        console.error(`Error input. You need to use 1 number at least in password! Reload page and reenter data please.`);
    }
    if (!letterExistence) {
        console.error(`Error input. You need to use 1 letter at least in password! Reload page and reenter data please.`);
    }
}

/*

// Решение с помощью более детального разбиения тела функции на отдельные меньшие функции


console.log( validatePassword(password) );
informUser();

function informUser() {
    if (!containOnlyNumbersAndLatinLetters(password)) {
        console.error(`Error input. You need to use only numbers and latin letters! Reload page and reenter data please.`);
    }
    if (!checkLengthOfString(password)) {
        console.error(`Error input. You need to use from 7 to 19 symbols in password! Reload page and reenter data please.`);
    }
    if (!detectNumber(password)) {
        console.error(`Error input. You need to use 1 number at least in password! Reload page and reenter data please.`);
    }
    if (!detectLetter(password)) {
        console.error(`Error input. You need to use 1 letter at least in password! Reload page and reenter data please.`);
    }
}

function checkLengthOfString(string, min, max) {
    return (string.length > min && string.length < max);
}

function containOnlyNumbersAndLatinLetters(string) {
    let i;
    let num;
    let stringToCompare = '';
    let newString = string.toUpperCase();
    
    for (i = 0; i < newString.length; i++) {
        num = newString.charCodeAt(i);
        
        if (num >= 48 && num <= 57) {
            stringToCompare += string[i];
        } else if (num >= 65 && num <= 90) {
            stringToCompare += string[i];
        }
    }
    
    return stringToCompare.length === string.length;
}

function detectNumber(string) {
    let i;
    let num;
    
    for (i = 0; i < string.length; i++) {
        num = string.charCodeAt(i);
        
        if (num >= 48 && num <= 57) {
            return true;
        }
    }
    
    return false;
}

function detectLetter(string) {
    let i;
    let num;
    let newString = string.toUpperCase();
    
    for (i = 0; i < newString.length; i++) {
        num = newString.charCodeAt(i);
        
        if (num >= 65 && num <= 90) {
            return true;
        }
    }
    
    return false;
}

function validatePassword(string) {
    if ( checkLengthOfString(string, 6, 20) && containOnlyNumbersAndLatinLetters(string)
        && detectNumber(string) && detectLetter(string) ) {
            return 'VALID';
        }
    
    return 'INVALID';
}
*/

