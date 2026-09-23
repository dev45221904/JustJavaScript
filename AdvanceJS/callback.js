//---------------------------------------------CALLBACK------------------------------------------------

//1. Example 1
function myFunc(callback){
    let name = "Dev";
    console.log(name);
    callback(21);
}   
myFunc(function newFunc(int){
    console.log(int);
});

//2. Example 2
function thisFunc(str, callback){
    let string = `this is callback's ${str}`;
    callback(string);
}
thisFunc("2nd Example", function twoFunc(str) {
   console.log(str);
   threeFunc(456);
});
function threeFunc(int){
    console.log(int);
    
}

//3. Example 3
function mainF(str,callback){
    const num = 5;
    console.log(str);
    callback(`You cannot assign to const var ${num}`);
}
mainF("This contains const variable & ", function NotSoMain(str){
    console.log(str);
});