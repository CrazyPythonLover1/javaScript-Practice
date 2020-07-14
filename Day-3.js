function isLeapYear(year){
    
    if (year % 4 == 0 &&  year % 100 !=0  || year % 400 == 0 ){
        return true;
    }else {
        return false;
    }
}

var is1500 = isLeapYear(1716);
console.log(is1500);