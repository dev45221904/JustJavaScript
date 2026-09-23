let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
let stringConvert = arr.toString();
console.log(stringConvert);

const obj = {
    name: "Dev",
    age: 21,
    email: "@.com"
}
console.log(obj.myname);
class Flip{
    constructor(str){
        this.str = str;
    }
    flip(){
        let split = this.str.split
        console.log(split);
        
    }
}
const flipO = new Flip();
flipO.flip("DEV");
