'use strict';

for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(this);
    }.bind(i), 600);
}

for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(arguments[0]);
    }, 600, i);
}