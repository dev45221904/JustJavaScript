let age = prompt("What is your age?");
age = Number.parseInt(age);

if(age > 10 && age<=20){
    window.alert("Your age is between 10 to 20");
}
else{
    window.alert("Your age is not between 10 to 20");
}

switch(age){
    case 12:
        window.alert("your age is 12");
    break;
    case 13:
        window.alert("your age is 13");
    break;
    case 14:
        window.alert("your age is 14");
    break;
    case 15:
        window.alert("your age is 15");
    break;
    case 16:
        window.alert("your age is 16");
    break;
    default:    
        window.alert("this is not valid age");
}

let number = prompt("Enter a number which is divisible by 2 or 3.");
number = Number.parseInt(number);

if (number<=0){
    window.alert("Please enter the valid number.");
}
else if(number %2 == 0 || number %3 == 0){
    window.alert("This number is divisble by either of them")
}
else{
    window.alert("This number is divisble by niether 2 nor 3.");
}

//---------------------Practice Question---------------------

// let input = Number(prompt("Enter the number which is multiple of 5:"));

// while(input <=0 || input %5 !== 0){

//     if(input<=0){
//         alert("Enter the valid number. Please try again");
//     }else {
//         alert("Not a multiple of 5:");
//     }
    
//     input = Number(prompt("Enter the number which is multiple of 5:"))

// }
// alert("Entered the Correct number");