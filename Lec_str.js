// Strings
let dev ="Hello World";
console.log(dev);

//obj
let dev0 = {
    name: "Dev",
    age: 21,
    clg: "Marwadi university",
    sem: 4,
    spi: 6.5,
};
console.log(dev0.age);

//template literal string...
let sent = `My name is ${dev0.name} & my age is ${dev0.age}, currently studying in ${dev0.clg} in semester ${dev0.sem}, and my spi is ${dev0.spi}`;
console.log(sent);


//string methods...
    //upper case...
dev = dev.toUpperCase();
console.log(dev);
    //lower case...
dev = dev.toLowerCase();
console.log(dev);
    //trim...
let random ="This is random"
random = random.trim();
console.log(random);    
    //str.slice...
console.log(random.slice(0 , 5));
    //concat...
console.log(random.concat(dev));

//practice Question.
let userName = prompt("Enter your Name");
while(userName === " "){
    alert("No space allowed")
    userName = prompt("Enter your Name");
}
let str = (`Your Username is: \n  @${userName}${userName.length} `)
alert(str);