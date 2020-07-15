var marks = [ 45, 33, 84, 94, 90, 66, 67, 65];

var max = marks[0];

for(var i =0; i < marks.length; i++){
    var element = marks[i];
    if ( element > max){
        max = element;
    }
}
console.log("highest Number of Array:", max);