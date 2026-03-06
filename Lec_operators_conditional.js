//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  OPERATORS IN JS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let a = 16;
let b = 8;
console.log("a = ", a);
console.log("b = ", b);

//---------------------Arithmatic---------------------
console.log("Arrithmatic");

// (i) add
let sum = a + b;
console.log("Addition: ",sum);
// (ii) subtract
let sub = a - b;
console.log("Substraction: ",sub);

//(iii) Multiply
let mul = a * b;
console.log("Multiplication: ",mul);

//(iv) Divide
let div = a / b;
console.log("Divison: ",div);

//(v)modulus
let mod = a % b;
console.log("Modulus: ",mod);

//(vi) Exponential
let expo = a**b;
console.log("Exponential: ",expo);
//(vii)Increment
let Increment = a++;
console.log("Increment: ",Increment)
//(viii)Decrement
let Decrement = --b;
console.log("Decrement: ",Decrement);

//---------------------Assignment---------------------
console.log("Assigment Operators:")
let eq = a = b;
console.log(eq);

let Assignment = b += a;
console.log(Assignment);

let Assignment2 = b -= a;
console.log(Assignment2);

let Assignment3 = b*= a;
console.log(Assignment3)

let Assignment4 = b/= a;
console.log(Assignment4);

//---------------------Comparison---------------------
console.log("Comparison Operators:")
let x = 45;
let y = 40;
console.log("X: ", x);
console.log("Y: ",y);

// (i) Equal to
let check = x == y;
console.log("X = Y? ",check);

//(ii) Not Equal to:
let check1 = x!==y;
console.log("X not Equal to Y? ", check1);

//(iii) Equal to and type(Strict Check)
let check2 = x === y;
console.log("Strict check", check2);

//---------------------Logical---------------------

//(i) Logical &&(AND)
let c = "Movie";
let d = 67;
console.log("Check c and d are true or false", c === 67 && d === "Movie");// returns true only if all the conditions are true

//(ii) Logical ||(OR)
let e = "Movie";
let f = 67;
console.log("Check True or False", e === c || f === c); // returns true if one or more than one condition is true

//(iii) Logical !(NOT)
console.log("Not Operation ! =", c!=d);// true

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  CONDITIONAL STATEMENTS IN JS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// (i) IF::::
let age = Number(prompt("Enter Your age:"))    
if(age >= 18){
  alert("You can vote")
}

// (i) IF ELSE::::
let num = Number(prompt("Enter the number to check that if it is multiple of 5"));
if(num %5 == 0){
  alert("This number is multiple of 5");
}else{
  alert("The number is not the multuple of 5");
}

//(ii) ELSE IF::::::
let marks = Number(prompt("Enter the marks of student"));
if(marks <= 49 ){ 
  alert("This student has F grade")
} else if(marks <= 59){
  alert("This student D grade")
}else if(marks <= 69){
  alert("This student has C grade");
}else if(marks <= 79){
  alert("This student has B grade");
}else if(marks <=100){
  alert("This Student has A grade");
}else{
  alert("invalid marks");
}