//simple function
function countVowels(str){
    let count = 0
    for( const char of str){
        if(char === "a" || char === "e" || char === "i"|| char === "o" || char === "u"){
          count++;
        }
        
    }
    return count;
}

//arrow function
const countVowels00 =(str) =>{
    let count = 0;
    for(let char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
          count++;  
        }
    }
    return count;
}

let output = countVowels("DevShrimankar");
let finalOutput = (`The Vowels in given string is: ${output}`);
console.log(finalOutput);
console.log("The Vowles in given string is:", output);


//For each loop
let arr =[2, 3, 4, 5, 6];

arr.forEach((val) => {
    console.log(val*val);
});

//filter method...
 let marks =[
    45,
    23,
    90,
    68,
    89,
    98,
    56,
    91,
    56,
    90,
    94,
    57,
    92,
];
console.log( "This is length of array of marks:", marks.length);

let valFinal = marks.filter((val) =>{
    return val>=90;
});
console.log( "The students who got marks 90 or 90 up are:", valFinal);

 