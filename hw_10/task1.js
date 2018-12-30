'use strict';

function applyAll(func, ...rest) {
    return func(rest);
}

let sum = (array) => {
    return array.reduce((a, b) => a + b);
};

let mul = (array) => {
    return array.reduce((a, b) => a * b);
};

let minus = (array) => {
    return array.reduce((a, b) => a - b);
};

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 1, 2, 3, 4));
console.log(applyAll(minus, 10, 3, 2, 1));

