'use strict';

let cashbox = {
    25: 0,
    50: 0,
    100: 0
};
let incomingBanknote;

do {
    incomingBanknote = +getValidIncomingBankNote(cashbox);
} while (giveChange(incomingBanknote, cashbox));

console.dir( cashbox );

function giveChange(value, object) {
    switch (value) {
        case 25:
            return giveChangeFrom25(object);
        case 50:
            return giveChangeFrom50(object);
        case 100:
            return giveChangeFrom100(object);
    }
}

function giveChangeFrom25(object) {
    object[25]++;
    console.log( 'You have successfully bought 1 ticket. Your change is 0 :)' );
    return true;
}

function giveChangeFrom50(object) {
    if (object[25]) {
        object[25]--;
        object[50]++;
        console.log( 'You have successfully bought 1 ticket. Your change is 25 :)' );
        return true;
    }
    console.log( 'Sorry, we have no money to give You a change. Deal is impossible :(' );
    return false;
}

function giveChangeFrom100(object) {
    if (!object[25] || !object[50] && object[25] < 3) {
        console.log( 'Sorry, we have no money to give You a change. Deal is impossible :(' );
        return false;
    
    } else if (cashbox[50] > 0) {
        cashbox[25]--;
        cashbox[50]--;
        cashbox[100]++;
        console.log( 'You have successfully bought 1 ticket. Your change is 75 (1 banknote 25 and 1 banknote 50)' );
        return true;
    
    } else {
        cashbox[25] -= 3;
        cashbox[100]++;
        console.log( 'You have successfully bought 1 ticket. Your change is 75 (3 banknotes 25 each)' );
        return true;
    }
}

function getValidIncomingBankNote(object) {
    let faceValue;
    let value = prompt(`Cash desk accepts the following banknotes: 25, 50 and 100.\nWhich one You want to use?`, ``);
    
    if (value === null) {
        return false;
    }
    
    for (faceValue in object) {
        if (faceValue === value){
            return value;
        }
    }
    console.log(`Be attentive when choosing a banknote for pay.`);
    return getValidIncomingBankNote(object);
}

