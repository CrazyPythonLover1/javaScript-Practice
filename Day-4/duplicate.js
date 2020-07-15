var numbers = [ 5, 3, 8, 9, 9, 6, 6, 6,8, 3, 2, 9,6,5];

var uniqueNum = [];

for(var i = 0; i< numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNum.indexOf(element);
    if (index== -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);