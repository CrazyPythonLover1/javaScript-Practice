var a = 5; 
var b = 7;
// console.log('before swap: a=', a, ',b=',b );

var temp = a;
a = b;
b = temp;
// console.log('before swap: a=', a, ',b=',b );

var x = 5;
var y = 7;

x = x + y;
y = x - y;
x = x -y ;

console.log('after swap: x=', x, ',y=',y );


var p = 5;
var q = 7;

[p,q] = [q, p]
console.log('after swap: p=', p, ',q=',q );

for(var i = 0; i< 10; i++){
    var randomNum = Math.random()*6;
    var result = Math.round(randomNum);
    if ( result == 0){
        console.log(result=1);
    }
    else{
        console.log(result);
    }
    
}

