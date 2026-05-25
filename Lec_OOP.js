//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< OOP CONCEPTS IN JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Two Ways of definig function in obj
const obj ={
    myFunc(){
        console.log("this is function method 1"); // Widely used method
    },
    myFunc0 : function(){   
        console.log("this is function method 2");

    }
}
console.log(obj.myFunc());
console.log(obj.myFunc0());

// Prototype in JS (.__proto__) 
// This is used to call the methods or fuction of obj1 in obj2
const marks = {
    isPass(){
        console.log("You passed the exam");
    }
}
const student0 = {
    firstname: "Dev"
};
const student1 = {
    firstname: "Saul"
};
student0.__proto__ = marks;
console.log(student0.isPass());
student1.__proto__ = marks;
console.log(student1.isPass());   //Uncaught TypeError: student1.isPass is not a function (shows error if proto is not used)

//Class in js
class myClass{
    myFunc(){
        console.log("This is function 1");
        
    }
    myFunc0(){
        console.log("This is function 4");
    }
}
const classObj = new myClass();
console.log(classObj.myFunc());
console.log(classObj.myFunc0());

class myCar{
    constructor(){
        //initialization
        console.log("doors closed!")
        console.log("Fasten your seatbelts")
    }
    startCar(){
        console.log("car started");
        let user;
        if(user === "No" || user === "no" || user === "NO"){
            console.log("Fasten your seatbelt please");
        }
        else if(user === "Yes" || user === "YES" || user === "yes"){
            console.log("Ok you can drive");
        }
    }
}

const carObj = new myCar();
// console.log(carObj.constructor());  // No need to call the constructer it invokes automatically
console.log(carObj.startCar());

