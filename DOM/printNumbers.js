// console.log("Hello");

// print 1 to 100
// such that if n % 3 => print fizz
// if n % 5 => print buzz
// if n % 3 and n % 5 => print fizzBuzz

//1.
/*for(var i = 1 ; i <= 100 ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzBuzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }else{
    console.log(i);
    }
}
*/

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 == 0 && count % 5 == 0) {
      output.push("fizzBuzz");
    } else if (count % 3 == 0) {
      output.push("Fizz");
    } else if (count % 5 == 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

fizzBuzz();
