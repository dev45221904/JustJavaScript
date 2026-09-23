const laptop ={
    brand: "Asus",
    RAM: 16,
    isOn: false,
    powerOn(){
        this.isOn = true;
        return "Laptop is On"
    }
}
result = laptop.powerOn();
console.log(result);

// Destructring is extarcting elements from objs
const obj = {
    name: "Dev",
    Age: 21,
    speciality: "Web3"
}
let name = obj.name;
let Age  = obj.Age;
let speciality = obj.speciality;
console.log(name, Age, speciality);
console.log(`my name is ${obj.name}`);
console.log(`my age is ${Age}`);


