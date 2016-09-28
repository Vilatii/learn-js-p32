var Math1 = {
    res: 0,
    sum: function() {

        for (var i = 0; i < arguments.length; i++) {
            this.res += arguments[i];
        }

        return this;
    },
    min: function() {

        for (var i = 0; i < arguments.length; i++) {
            this.res -= arguments[i];
        }

        return this;
    }
};


//var i = Math1.sum(4,4).min(2,2) >= 0 ? 'Больше' : 'Меньше';

var sum = function(a, b) {
    console.log(this);
};

console.log( Math1.sum(4,4).min(2,2) );

