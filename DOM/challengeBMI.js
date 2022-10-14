function calculateBMI(weight,height){

    var bmi = Math.floor(weight/Math.pow(height,2));
    return bmi;
}

var weight = Math.random() *100;
weight = Math.floor(weight)+1;

var height = Math.random() *5;
height = Math.floor(height)+1;

var bmi = calculateBMI(weight,height);
if(bmi < 18.5){
    console.log("Your BMI is "+bmi + ", so you are underweight");
}
if(bmi >= 18.5 && bmi <= 24.9){
    console.log("Your BMI is "+bmi + ", so you have a normal weight");
}
if(bmi > 24.9){
    console.log("Your BMI is "+bmi + ", so you are overweight");
}
