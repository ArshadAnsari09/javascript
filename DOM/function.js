
function getMilk(money , costPerBottle){
    console.log("Go outside");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveRight");

    var canBuy = Math.floor(money / costPerBottle);
    console.log("Buy " + canBuy + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveLeft");
    return calChange(money,costPerBottle);
}

function calChange(money,cost){
     var noOfBottles = Math.floor(money % cost);
     return noOfBottles;
}
console.log(getMilk(10,3));

// task

/*function lifeIsLeft(currAge){
    var yearRemaining = 90 - currAge;
    var days = yearRemaining * 365;
    var weeks = yearRemaining * 52;
    var months = yearRemaining * 12;

    console.log("You have " + days + " days , " + weeks + " weeks and " + months + " months left.");
}

lifeIsLeft(28);*/