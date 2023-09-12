//Coding Challenge #3
var Dolphins = [150, 107, 140];
var Koalas = [50, 80, 90];

//1. Calculate the average score for each team
function avgScore(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / (array.length)
    return avg;
}

console.log(avgScore(Dolphins));
console.log(avgScore(Koalas));
// 2. Compare the team's average scores to determine the winner of the competition
if (avgScore(Dolphins) > avgScore(Koalas)) {
    console.log("\nDolphins team is the winner of the competition!");
} else if (avgScore(Dolphins) < avgScore(Koalas)) {
    console.log("\nKoalas team is the winner of the competition!");
} else {
    console.log("\nTwo team draw!!!!!!!!");
}
//3.