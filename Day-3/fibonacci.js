
// fibo[2] = fibo[2-1] + fibo[2-2]
// fibo[3] = fibo[3-1] + fibo[3-2]
function fibonacci(n){
    var fibo = [0,1];
    for (var i = 2; i<n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

var result = fibonacci(5);
console.log(result);

// fibonacci with Recursive 

function fiboRecursive(n){
    if(n==0){
        return 0;
    }
    else if (n==1){
        return 1
    }
    else{
        return fiboRecursive(n-1) + fiboRecursive(n-2);
    }
}
var result2 = fiboRecursive(4);
//console.log(result2);
 
// Find fibonacci Array with Recursive  

function fiboRecursive(n){
    if(n==0){
        return [0];
    }
    else if (n==1){
        return [0,1];
    }
    else{
        var fibo = fiboRecursive(n-1);
        var newElement = fibo[n-1] + fibo[n-2];
        fibo.push(newElement);
        return fibo;
    }
}

var result3 = fiboRecursive(5);
console.log(result3);

