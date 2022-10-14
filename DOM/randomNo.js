// var rand = Math.random();
// rand = rand * 6;
// rand = Math.floor(rand) + 1;
// console.log(rand); 

var firstName = prompt("Enter your name");
var secondName = prompt("Enter your crush name");


var loveScore = Math.random();
loveScore = Math.floor(loveScore*100) + 1;

// console.log("Your love score with your crush " +secondName + " is " + loveScore + "%");
if(loveScore > 70){
alert("Your love score with your crush " +secondName + " is " + loveScore + "%." + " And you like her like bat likes ball. ");
}
if(loveScore > 30 && loveScore <= 70){
    alert("Your love score with your crush " +secondName + " is " + loveScore + "%");
}
if(loveScore <= 30){
    alert("Your love score with your crush " +secondName + " is " + loveScore + "%." + "You both are like oil and water");
}