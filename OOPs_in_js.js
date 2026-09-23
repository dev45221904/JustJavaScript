//Normal way of creating Obj
const BCS = {
  Ename: "Saul Goodman",
  title: "Lawyer",
  city: "Albequerque",
  age: 47,
  func() {
    return `my name is ${this.Ename}`;
  },
};

console.log(BCS.func());

const obj1 = {
  name: "dev",
  roll: 92510103038,
  class: "4EC6",
  isPresent: true,
  myFunc() {
    return `my name is ${this.name} and roll number is ${this.roll} and class is ${this.class}. `;
  },
};
funcCall = obj1.myFunc();
console.log(funcCall);

function getThis() {
  return this;
}

const obj2 = {
  str: "str",
};
const obj3 = {
  str: "str",
};

obj2.getThis = getThis;
obj3.getThis = getThis;

console.log(obj2.getThis());

// Practice Example 1 // Function are methods in js
class Car {
  properties(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;
    return `the name of car is ${this.brand}, the color of car is ${this.color} and the speed of car is ${this.speed}`;
  }
  accelerate() {
    this.speed = 100;
    return `the speed has reached to ${this.speed}Km/ph`;
  }
  brake() {
    this.speed = 0;
    return `The car stopped and speed is now ${this.speed}Km/ph`;
  }
  showspeed() {
    this.speed = 50;
    return `${this.speed}Km/ph is your currnt speed`;
  }
}
const carStoped = new Car();
console.log(carStoped.properties("volkswagen", "red", 0));

const accelerate = new Car();
console.log(accelerate.accelerate());

const brake = new Car();
console.log(brake.brake());

const showspeed = new Car();
console.log(showspeed.showspeed());

//Practice Example 2
class Movie {
  constructor(title, dir, year) {
    ((this.title = title), (this.dir = dir), (this.year = year));
  }
  decribe() {
    return `the title of the movie is ${this.title} and the director of this movie is ${this.dir} and the year of release is ${this.year}`;
  }
}
const movie = new Movie("taxi Driver", "martin scorsese", 1976);
const movie2 = new Movie("Intersteller", "Christopher Nolan", 2011);
const movie3 = new Movie("Goodfellas", "martin scorsese", 1990);

let finalOutput = movie.decribe();
console.log(finalOutput);
let finalOutput2 = movie2.decribe();
console.log(finalOutput2);
let finalOutput3 = movie3.decribe();
console.log(finalOutput3);

// "this" Example
class Count {
  constructor() {
    this.count = 0;
    console.log("Initial value:", this.count);
  }
  Increment() {
    this.count++;
    console.log("Incremented Value:", this.count);
  }
  Decrement() {
    this.count--;
    console.log("Decremented Value: ", this.count);
  }
  reset() {
    this.count = 0;
    console.log("Restored value", this.count);
  }
}

const countObj1 = new Count();
const countObj2 = new Count();
countObj1.Increment();
countObj2.Increment(); // indepent coz returns 1
countObj1.Increment();
countObj1.Decrement();
countObj2.Decrement();
countObj1.reset();

// Abstraction
class EmailSender {
  // These are complex methods — users of this class do not need to know how they work
  #connectToServer() {
    console.log("Connecting to SMTP server...");
    // Imagine complex network connection code here
  }
 
  #formatEmail(to, subject, body) {
    return { to, subject, body, timestamp: new Date() };
    // Imagine complex email formatting code here
  }
 
  #disconnectFromServer() {
    console.log("Disconnecting...");
  }
 
  // This is the SIMPLE public method the user calls
  sendEmail(to, subject, body) {
    this.#connectToServer();
    const email = this.#formatEmail(to, subject, body);
    console.log("Email sent to: " + email.to);
    this.#disconnectFromServer();
  }
}
 
const mailer = new EmailSender();
// User only needs to know about sendEmail()
// All the complex steps are hidden
mailer.sendEmail("raj@example.com", "Hello", "How are you?");