//Array
let dev = ["Saul", "Mike", "kim", "howard", "lalo"];
console.log(dev);
console.log(dev[0]);
console.log(dev[1]);
console.log(dev[2]);
console.log(dev[3]);
console.log(dev[4]);

//change value in array
console.log((dev[2] = "Gustavo"));
console.log(dev);

//loops in array

//for loop
for (let i = 0; i < dev.length; i++) {
  console.log(dev[i]);
}

//for of...
let char = [
  "\nJon Snow",
  "Sansa Stark",
  "Arya Stark",
  "Khalessi",
  "Tyrion Lannister",
];
for (let item of char) {
  console.log(item);
}

// Practice Question1...
let marks = [85, 97, 44, 37, 76, 60];
let result = 0;
for (let val of marks) {
  result += val;
}
let avg = result / marks.length;
console.log(result);
console.log(avg);

// Practice Question2...
let price = [250, 645, 300, 900, 50];
let i = 0;
for (val of price) {
  offer = val / 10;
  price[i] = price[i] - offer;
  console.log(price[i]);
  i++;
}

// Methods in Array...
let brands = ["BMW", "Asus", "Mercedes", "Tata"];
console.log(brands);
//push
brands.push("Tcl");
console.log(brands);
//pop
delted = brands.pop();
console.log(brands);
//delete
console.log(delted);
//str conversion
let str = brands.toString();
console.log(str);

let Series = [
  "Better Call Saul",
  "Breaking Bad",
  "Money Heist",
  "Sons Of Anarchy",
];
let charName = ["kim", "saul", "berlin"];

//Concatination
let conCat = brands.concat(Series, charName);
console.log(conCat);
//
let str2 = conCat.toString();
console.log(str2);
//unshift
brands.unshift("Sansui");

//slice(returns the value betwen the staring point and ending point)
brands.slice(1, 2);
console.log(brands);

Series.splice(0, 2, ["Friends", "Seinfield"]);
console.log(Series);

Series.splice(0, 1, "Friends", "Seinfield");
console.log(Series);

Series.splice(3, 0, "The Office", "Vikings");
console.log(Series);