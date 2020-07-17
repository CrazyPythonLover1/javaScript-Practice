function factorial(n){
    var factorial = 1;
    for(var i=1; i<=n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

var result = factorial(20);
console.log(result);

// while Loop 
function factorialWhile(n){
    var factorial = 1;
    var i = 1;
    while(i <= n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var result2 = factorialWhile(20);
console.log(result2);

// Factorial Recursive //

function factorialRecursive(n){
    if (n == 0){
        return 1;
    }
    else{
        return n * factorialRecursive(n-1);
    }
}
var result3 = factorialRecursive(20);
console.log(result3);