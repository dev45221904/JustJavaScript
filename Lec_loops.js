//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=LOOPS IN JS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//(i) FOR LOOP:::
for(let i = 0; i<=10; i++){
console.log(i)
}

//(ii) WHILE LOOP:::
let num = 10;
while(num<=100){
    console.log("num = ", num);
    num++;
}

//(iii) DO-WHILE LOOP:::
let number = 0
do{
    console.log("Number =", number);
    number++;
}while(number <= 100);


//(iv) FOR IN LOOP:::
let obj ={
    firstname: "Dev",
    middlename: "Ashish",
    lastname: "Shrimankar"
};

for(let val in obj){
    console.log(val,":", obj[val]);
}

//(v) FOR OF LOOP:::(works on str and arr)
let str = "Dev Shrimankar";
for(let val of str){
    console.log(val);
    val++;
}

//arr
let arr = [15, 20, 22, 40, 10, 56];
for(let i of arr){
    console.log(i);
    i++; 
}

//Practice Question:::
for(let even = 0 ; even<=100; even++){
    if(even %2 == 0){
        console.log(even);
    }
}

// //practive quetion 2:::
let gNum = 100;
let uNum = Number(prompt("Guess the correct number:"));

while(uNum != gNum){
    if(uNum < 0 ||isNaN(uNum)){
        alert("Enter the valid Number")
    }else{
        alert("Wrong Guess. Guess Again")
    }
    uNum = Number(prompt("Guess the correct number:"));
}
alert("You guessed the right number");


