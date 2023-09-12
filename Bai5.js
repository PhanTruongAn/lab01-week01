//Coding Challenge #5

var Dolphins = [97, 112, 101];
var Koalas = [109, 95, 123];

function calcAverage(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / (array.length)
    return avg;
}
console.log(calcAverage(Dolphins));
console.log(calcAverage(Koalas));
