'use strict';

let complexFunction = function (arg1, arg2) {
    console.log (`function running... result is: ${arg1 + arg2}`);

    return arg1 + arg2;
};

function cache(func){
    let arrayOfCachedResults = [];
    
    return function() {
        let i;
        let objectOfCurrentCachedResult = {};

        if (typeof(arguments[0]) !== 'number' ||  typeof(arguments[1]) !== 'number') {

            for (i = 0; i < arrayOfCachedResults.length; i++) {

                if (arrayOfCachedResults[i].arg1 === arguments[0] && arrayOfCachedResults[i].arg2 === arguments[1]) {
                    
                    console.log (`function is not running... cached result is: ${arrayOfCachedResults[i].cachedResult}`);

                    return arrayOfCachedResults[i].cachedResult;
                }

            }

            objectOfCurrentCachedResult.arg1 = arguments[0];
            objectOfCurrentCachedResult.arg2 = arguments[1];
            objectOfCurrentCachedResult.cachedResult = func.apply(this, arguments);
            arrayOfCachedResults.push(objectOfCurrentCachedResult);

            return objectOfCurrentCachedResult.cachedResult;
        
        } else {

            for (i = 0; i < arrayOfCachedResults.length; i++) {

                if (arrayOfCachedResults[i].arg1 === arguments[0] && arrayOfCachedResults[i].arg2 === arguments[1] ||
                    arrayOfCachedResults[i].arg1 === arguments[1] && arrayOfCachedResults[i].arg2 === arguments[0]) {
    
                        console.log (`function is not running... cached result is: ${arrayOfCachedResults[i].cachedResult}`);
    
                        return arrayOfCachedResults[i].cachedResult;
                    }
            }
    
            objectOfCurrentCachedResult.arg1 = arguments[0];
            objectOfCurrentCachedResult.arg2 = arguments[1];
            objectOfCurrentCachedResult.cachedResult = func.apply(this, arguments);
            arrayOfCachedResults.push(objectOfCurrentCachedResult);
    
            return objectOfCurrentCachedResult.cachedResult;
        }
    }        
}

let cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');
cachedFunction(5, 10);
cachedFunction(10, 5);
cachedFunction(10, 15);
cachedFunction('bar', 'foo');
cachedFunction('bar', 'foo');
cachedFunction('foo', 'bar');
cachedFunction(15, 10);