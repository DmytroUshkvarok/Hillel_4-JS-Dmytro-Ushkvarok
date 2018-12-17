'use strict';

//  Task 2

let password = prompt(`Enter your password phrase here please
Your password must include:
1) only numbers and latin letters
2) minimum 6 symbols and maximum 20 symbols
3) 1 number and 1 letter at least`, ``);

if (password !== null) {
    console.log( `You have canceled password input` );
} else {
    console.log( validatePassword(password) );
}

function validatePassword(string) {
    let numberExistence;
    let letterExistence;
    let minPasswordLength = 6;
    let maxPasswordLength = 20;
    
    let checkForNull = function () {
        if (string === null) {
            return `You have canceled password input`;
        }
    };
    
    if (string.length > minPasswordLength && string.length < maxPasswordLength) {
        
        let containOnlyNumbersAndLatinLetters = function() {
            let i;
            let num;
            let stringToCompare = '';
            let transformedString = string.toUpperCase();
    
            for (i = 0; i < transformedString.length; i++) {
                num = transformedString.charCodeAt(i);
        
                if (num >= 48 && num <= 57) {
                    stringToCompare += string[i];
                    numberExistence = true;
            
                } else if (num >= 65 && num <= 90) {
                    stringToCompare += string[i];
                    letterExistence = true;
                }
            }
    
            return stringToCompare.length === string.length;
        };
    
        if (containOnlyNumbersAndLatinLetters()) {
            
            let informUser = function () {
                if (!numberExistence) {
                    console.error(`Error input. You need to use 1 number at least in password! Reload page and reenter data please.`);
                }
                if (!letterExistence) {
                    console.error(`Error input. You need to use 1 letter at least in password! Reload page and reenter data please.`);
                }
            };
            informUser();
            
            return numberExistence
                ? letterExistence
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