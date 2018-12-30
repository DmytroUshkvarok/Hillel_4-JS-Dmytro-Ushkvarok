'use strict';

function fibonacci(n) {
    let i;
    let number = 0;
    let a = 1;
    let b = 0;
    for (i = 0; i < n; i++) {
        number = a + b;
        a = b;
        b = number;
    }
    return number;
}

function fibonacciBinet(n) {
    const FI = (1 + Math.sqrt(5)) / 2;
    return +(Math.pow(FI, n) / Math.sqrt(5)).toFixed(0);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(6));

console.log(fibonacciBinet(0));
console.log(fibonacciBinet(1));
console.log(fibonacciBinet(3));
console.log(fibonacciBinet(6));