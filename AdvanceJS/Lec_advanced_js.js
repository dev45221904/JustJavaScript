add =(a, b)=>{
    return a + b;
}

func2=(a, b)=>{
    return a*b;
}
calculate = (x,y)=>{
    return x + y;
}

let additon = add(3, 4);
console.log(additon);
let multiplication = func2(5, 6);
console.log(multiplication);
let calc = calculate(additon, multiplication)
console.log(calc);
 
fuctionBlock = () =>{
    let outer = "this is outer"
    innerFunc = () =>{
        console.log(outer);
    }
    innerFunc();
}
let output = fuctionBlock();
console.log(output)
console.log(this);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< setTimeout <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

class Async{
    constructor(order){
        this.order = order;
    }
    takeOrder(){
        let ask = "Swiggy:\n What do you want to order?"
        console.log(ask);
        setTimeout(()=>{
            console.log(`Customer:\n I want to order a ${this.order}`);
        },3000)
    }
    printOrder(){
        setTimeout(()=>{
            console.log(`Swiggy:\n We have confirmed your order of ${this.order}`);
        },6000)
        setTimeout(() =>{
            console.log(`Swiggy:\n Wait your order of ${this.order} is being prepared`);
            
        },9000);
        setTimeout(()=>{
            console.log(`Swiggy: \n Your ${this.order} is out for delivery`);
            
        },12000);
    }
}
const async = new Async("Pizza");
async.takeOrder();
async.printOrder();         