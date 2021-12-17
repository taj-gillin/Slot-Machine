/*
Cherry - Roudebush
Orange - Aadam
Watermelon - Anna
Bell - Gersh
Single Bar - Bennet
Double Bar - Quinn
Triple Bar - Ben
*/
var Wheel1Output = document.getElementById("Wheel1Output");
var Wheel2Output = document.getElementById("Wheel2Output");
var Wheel3Output = document.getElementById("Wheel3Output");
var rollButton = document.getElementById("roll");
var output = document.getElementById("output");
var totalDisplay = document.getElementById("totalDisplay");
var totalMoney = 100;
var PayoffValues = {
    "1Cherry": 2,
    "2Cherries": 5,
    "3Cherries": 10,
    "3Oranges": 15,
    "3Watermelons": 20,
    "3Bells": 30,
    "3Bars": 30,
    "3SingleBars": 50,
    "3DoubleBars": 100,
    "3TripleBars": 200
};
var Wheel1 = new Array();
var Wheel2 = new Array();
var Wheel3 = new Array();
var roll = ["", "", ""];
Wheel1 = ["Cherry", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Orange", "Watermelon", "Bell", "Single Bar", "Single Bar", "Double Bars", "Triple Bars", "Triple Bars", "Triple Bars"];
Wheel2 = ["Cherry", "Orange", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Watermelon", "Bell", "Single Bar", "Single Bar", "Double Bars", "Triple Bars", "Triple Bars", "Triple Bars"];
Wheel3 = ["Cherry", "Orange", "Watermelon", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Bell", "Single Bar", "Single Bar", "Double Bars", "Triple Bars"];
rollButton.addEventListener("click", function () {
    roll = [Wheel1[Math.floor(Math.random() * Wheel1.length)], Wheel2[Math.floor(Math.random() * Wheel2.length)], Wheel3[Math.floor(Math.random() * Wheel3.length)]];
    Wheel1Output.src = "images/" + roll[0] + ".jpg";
    Wheel2Output.src = "images/" + roll[1] + ".jpg";
    Wheel3Output.src = "images/" + roll[2] + ".jpg";
    var outputValue = calculateOutput();
    output.innerHTML = "You won <strong>$" + outputValue + "</strong>";
    totalMoney--;
    totalMoney += outputValue;
    totalDisplay.innerHTML = "Total: <strong>$" + totalMoney + "</strong>";
});
function calculateOutput() {
    //Cherries
    var cherryCount = 0;
    for (var i = 0; i < roll.length; i++) {
        if (roll[i] == "Cherry") {
            cherryCount++;
        }
    }
    switch (cherryCount) {
        case 1:
            return PayoffValues["1Cherry"];
            break;
        case 2:
            return PayoffValues["2Cherries"];
            break;
        case 3:
            return PayoffValues["3Cherries"];
            break;
    }
    //3Bars
    var barCount = 0;
    for (var i = 0; i < roll.length; i++) {
        if (roll[i] == "Single Bar" || roll[i] == "Double Bars" || roll[i] == "Triple Bars") {
            barCount++;
        }
    }
    if (barCount == 3 && !(roll[0] == roll[1] && roll[1] == roll[2])) {
        return PayoffValues["3Bars"];
    }
    //Triples
    if (roll[0] == roll[1] && roll[1] == roll[2]) {
        switch (roll[0]) {
            case "Orange":
                return PayoffValues["3Oranges"];
                break;
            case "Watermelon":
                return PayoffValues["3Watermelons"];
                break;
            case "Bell":
                return PayoffValues["3Bells"];
                break;
            case "Single Bar":
                return PayoffValues["3SingleBars"];
                break;
            case "Double Bars":
                return PayoffValues["3DoubleBars"];
                break;
            case "Triple Bars":
                return PayoffValues["3TripleBars"];
                break;
        }
    }
    return 0;
}
