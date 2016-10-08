.main .line {
    clear: both;
}
.main .line div {
    width: 20px;
    height: 20px;
    float: left;
    margin: 1px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    transition: background-color .5s;
}
.main .line div.s {
    background-color: #bbb;
    transition: background-color .5s;
}
.main .line div.f {
    background-color: green;
    transition: background-color 2s;
}
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

