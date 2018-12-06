'use strict';

const RECIPE = {
    carrot: 50,
    potato: 50,
    eggs: .6,
    sausage: 40,
    cucumber: 30,
    cannedPeas: 30,
    mayo: 20
};

let productStack = {};

addProductToStack('carrot', 'g', productStack);
addProductToStack('potato', 'g', productStack);
addProductToStack('eggs', 'pcs', productStack);
addProductToStack('sausage', 'g', productStack);
addProductToStack('cucumber', 'g', productStack);
addProductToStack('cannedPeas', 'g', productStack);
addProductToStack('mayo', 'g', productStack);

console.dir(RECIPE);
console.dir(productStack);
console.log( `You can prepare ${countNumberOfServings(RECIPE,productStack)} servings of salad "Olivier"` );

function countNumberOfServings(recipe,stack) {
    let res;
    let numberOfServings;
    let productFromRECIPE;
    let productFromStack;
    
    outerLoop:
    for (productFromRECIPE in recipe) {
        for (productFromStack in stack) {
            if (productFromRECIPE === productFromStack) {
                res = ( Math.floor(stack[productFromStack] / recipe[productFromRECIPE]) || 0);
    
                if (numberOfServings === undefined || res < numberOfServings) {
                    numberOfServings = res;
                }
                
                continue outerLoop;
            }
        }
    }
    
    return numberOfServings;
}

function addProductToStack(product, units, stack) {
    stack[product] = +prompt(`How much ${product} You want to add to stack? (measured in ${units})`, ``);
    
    while (stack[product] < 0 || !isNumeric(stack[product])) {
        stack[product] = +prompt(`Use only positive number for ${product} adding to stack (measured in ${units})`, ``);
    }
}

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}