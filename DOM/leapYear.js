
function isLeapYear(year) {
    if(year % 4 === 0){
        if(year % 100 === 0){
           if(year % 400 === 0){
            return true;
           }else{
            return false;
           }
        }else{
            return true;
        }
    }else{
        return false;
    }
}

var leapYear = isLeapYear(2020);

if(leapYear === true){
    console.log("It is a leap year");
}else{
    console.log("It's not a leap year");
}