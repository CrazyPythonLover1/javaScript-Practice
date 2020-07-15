var numbers = [ 45, 33, 84, 94, 90, 66, 67, 65,88, 33, 22, 99,66,55];

function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i <numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;  
    }
    return sum;
}   

var result = getArraySum(numbers);
console.log(result);