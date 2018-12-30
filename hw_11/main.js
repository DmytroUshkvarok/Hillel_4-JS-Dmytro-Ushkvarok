'use strict';

let math = {
    x: 20,
    sum: function () {
        this.x += 5;
        return this;
    },
    minus: function () {
        this.x -= 5;
        return this;
    },
    multiply: function () {
        this.x *= this.x;
        return this;
    },
    showResult: function () {
        console.log(this.x);
        return this;
    }
};

math.sum().sum().showResult().minus().minus().showResult().minus().multiply().showResult();