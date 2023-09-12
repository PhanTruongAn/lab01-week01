//Coding Challenge #5

var Dolphins = [150, 107, 140];
var Koalas = [50, 80, 90];

function calcAverage(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / (array.length)
    return avg;
}

console.log(avgScore(Dolphins));
console.log(avgScore(Koalas));