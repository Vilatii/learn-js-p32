var values = [16, 123, 454, 6434, 2222, 123, 434];
var operators = ['+', '*', '-', '+', '*', '/'];
var i=0;
var result = 0;
console.log(values.length);
console.log(operators.length);
var mnozh = '*';
var del = '/';
var minus = '-';
            
var ln1 = values.length;
var ln2 = operators.length;
var j = 0;
var cache = 0;
var cache1 = 0;
var cache2 = 0;
var ln = 0;

for (var k = 0; k < ln1; k++) {

    if (ln1 > ln2) {
        ln = ln1;
    } else {
        ln = ln2;
    }
    for (var i = 0; i < ln; i++) {
        if (operators[i] == mnozh) {
            cache = values[j] * values[j + 1];
            alert(values[j] + '*' + values[j + 1] + '=' + cache)
            values[j] = cache;
            values.splice(j + 1, 1);
            operators.splice(i, 1);
            
        }
        if (operators[i] == del) {
            cache1 = values[j] / values[j + 1];
            alert(values[j] + '/' + values[j + 1] + '=' + cache1)
            values[j] = cache1;
            values.splice(j + 1, 1);
            operators.splice(i, 1);
            
        }
        if (operators[i] == minus) {
            cache2 = values[j] - values[j + 1];
            alert(values[j] + '-' + values[j + 1] + '=' + cache2)
            values[j] = cache2;
            values.splice(j + 1, 1);
            operators.splice(i, 1);
            
        }
        j++
    }
    break;
}
ln1 = values.length;
ln2 = operators.length;
j = 0;
if (ln1 > ln2) {
    ln = ln1;
} else {
    ln = ln2;
}
for (var i = 0; i < ln; i++) {
    result += values[j];
    j++
}
console.log(result);
alert("Result: " + result)
