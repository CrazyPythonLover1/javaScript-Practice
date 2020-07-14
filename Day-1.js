// Varriabel , Oparator, condition , Date


var bananaPrice = 12;
console.log(bananaPrice);

var name = " Mainul Islam Faruqi "
console.log(name);
console.log(typeof name);

var isHot = true;
var isRich = false;
console.log(isRich);

var promise = " I promise I will work hard to become a softaware engineer."
// find the starting position as a number
console.log(promise.indexOf(' work'));
console.log(promise.split('a' ));

var number1 = 25;
var number2 = 'i5.5';
// trasform from string to Float 
number2 = parseFloat(number2);
//  showing just integer 
number2 = parseInt(number2);
// showing the integer
number2 = +number2;
//  showing string 
number1 = ''+number1;

num1 = 0.1;
num2 = 0.2;
var total = num1 + num2;
total = total.toFixed(2)
console.log(total); 


var num = -5;
var num2 = 5.455
var absoluteNumber = Math.abs(num);
var result = Math.round(num2);
//  ceil to give the higher number
//  floor to give the lower number
//  var number = Math.random()*100;
//  var result = Math.round(number);


// ----------------- If else statement --------------------//

var biscuitPrice = 12;
if(biscuitPrice < 20 || biscuitPrice == 15 && biscuitPrice == 12){
    console.log("I will eat the biscuit");
}
else if (biscuitPrice == 12){
    console.log('    the price is 12            ');
}
else{
    console.log("I don't buy it. Try another one");
}


//  TimeZone 
var date = new Date( '1996-6-20');
console.log(date);