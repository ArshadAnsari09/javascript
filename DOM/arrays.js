// console.log("Hello");

var guestList = ["Arshad", "Arman","Sameer","Raju","Raman","Mohan"];
console.log(guestList[1]);  

var guestName = prompt("Enter the name please");

if(guestList.includes(guestName)){
    alert("Welcome!");
}else{
    alert("Sorry,may be next time");
}