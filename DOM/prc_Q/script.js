//Create a new button element. Give it a text “click me”, background color of red & text colorof white.
//Insert the button as the first element inside the body tag
let Btn = document.createElement("button");
Btn.innerText ="Click Me!"
console.log(Btn);
Btn.style.backgroundColor = "Red";
Btn.style.color = "white";
let divAppend = document.querySelector("div");
divAppend.prepend(Btn);


