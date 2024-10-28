console.log("Generate 20 random die rolls:");
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
var dieRolls = [];
for (var index = 0; index < 20; index++) {
    var dieRoll = rollDie();
    dieRolls.push(dieRoll);
}
console.log("Die Rolls", dieRolls);
