console.log("Hello");
//create object of houseKeeper

// var houseKeeper1 = {
//    name : "Savita",
//    age: 25,
//    shift: "Morning",
//    canWork:10
// }

// console.log(houseKeeper1.name);

//constructor
function HouseKeeper(name,age,shift,cleaning){
    this.name = name;
    this.age = age;
    this.shift = shift;
    this.cleaning = cleaning;
    this.clean = function (){
        alert("It's cleaning time");
    }
}

var houseKeeper1 = new HouseKeeper("Shinjo",21,"Evening",["bathroom","floor"]);
var houseKeeper2 = new HouseKeeper("Shiva",22,"Morning",["floor"]);
var houseKeeper3 = new HouseKeeper("Aran",29,"Evening",["bathroom"]);
houseKeeper1.clean();
console.log(houseKeeper2);