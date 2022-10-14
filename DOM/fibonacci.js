// console.log("Hello");

var arr = [];
var prev2 = 0;
var prev1 = 1;
function fibonacci(n){
    arr.push(prev2);
    arr.push(prev1);
    for(var i = 1; i <= n; i++){
        var curr = prev1 + prev2;
        arr.push(curr);
        prev2 = prev1;
        prev1 = curr;
    }
    console.log(arr);
}

var num = Math.floor(Math.random()* 15);
fibonacci(num);