var friendsAge = [22, 23 ,19, 25, 16, 13, 18];
var position = friendsAge.indexOf(13);

friendsAge.push(24) // add element to the last by push
friendsAge.unshift() // add element to the first 
// array_name.length show the number of list

friendsAge.pop(); // remove the last element
friendsAge.shift(); // remove the first item


// array_name.slice(start of index, before of the end) 
// only use the start and it shows the start of the index that i give,
//  finish to the end of the array
console.log(friendsAge)


// while loop 
var num = 0;
while (num<=15){
    console.log(num);
    num++;
}
// for loop 

for (var i = 0; i<10; i++){
    //console.log(i)
}
var num = [ 22, 11, 33, 44, 55, 66, 77, 88, 99 , 00];
for( var i = 0; i <= num.length; i++){
    //console.log(num[i]);
}
// function

function doubleIt(num1){
    var result = num1*2;
    return result;
}
doubleIt(100);
function add(num1, num2){
    var result = num1+ num2;
    return result;
}
var addition = add(10, 20);
console.log(addition);


var student = { id:121, phone:1234567890, name:'Abir'};
// we can access student obj from 3 ways
var phoneNo = student.phone;
var phoneNo1 = student["phone"];
var phoneProperty = "phone";
var phoneNo2 = student[phoneProperty];
// update the object in 3 ways
student.phone = 33333333366666666666;
student['phone'] = 444444444444;
student[phoneProperty] = 6666666666666666;
//  Add a new key value pair 
student.address = ' 10No Road, Banani'
// console.log(phoneNo,phoneNo1,phoneNo2)
console.log(student)
