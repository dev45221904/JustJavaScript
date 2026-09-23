// You can declare or initialize the function first and later give the function value
//function
function myFunction(a,b){
    sum = a + b;
    return sum;
}

let val =  myFunction(29,10);
console.log(val);

//mul
const mul =(c, d) => {
    return c*d;
}

let ans = mul(10,40);
console.log(ans);

//function expression(func stored in variable)
let Series = function(str){ //declaring str parameter in fuction.
    return "Must Watch" +" " + str;
}
let outputFinal = Series("Better call Saul"); // passing the str as an argument when calling the function.
console.log(outputFinal);

//function arrow method
Movies = (val) =>{
    return "Must Watch" + " " + val;
}
let result = Movies("Scarface");
console.log(result);

//map function
let arr = [
    "dev",
    "saul",
    "mike",
    "kim",
];

let char = arr.map((val) =>{
    return val;
});
console.log(char);