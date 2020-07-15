var business = 650;
var minister = 800;
var sochib   = 700;

if (business> minister){
    if ( business > sochib){
        console.log("Business is bigger than sochib and minister");
    }
    else{
        console.log("Sochib is bigger than business");
    }
}
else{
    if (minister>sochib){
        console.log("minister is bigger");
    }
    else{
        console.log('sochib is bigger');
    }
}