//Id method
let id = document.getElementById("para");
console.dir(id);

//"class" also called html collection. somewhat similiar to array
let id1 = document.getElementsByClassName("heading");
console.dir(id1[1]);
console.dir(id1);

//tagname, it also works as html collection
let para = document.getElementsByTagName("p");
console.log(para);

//Query Selctor(class)
let query1 = document.querySelector(".heading");
console.log(query1);

//Query Selector all("Returns the node list")
let query2 = document.querySelectorAll(".heading");
console.log(query2)

//Query Selector(id)
let query3 = document.querySelector("#btn");
console.log(query3); //query selector can not be pass, since the id is unique..
let query4 = document.querySelector("#btn2");
console.log(query4);


//--------------------------------------DOM Properties--------------------------------------

//1. tagname
console.dir(query3.tagName); // Returns the tagname

//2. parent-child
let It = document.querySelector("body");   
console.log(It);
console.log(It.lastElementChild);

//3. innerHtml
console.log(It.innerHTML); // Returns all the content including html tags

let ol = document.querySelector("ol");
console.log(ol);
ol.innerHTML = "<ul><li>Dev</li><li>Mike</li></ul>"; //adding value in ol

//4. innertext
console.log(It.innerText); // Return only the content present inside the html tags

let list = document.querySelector("#unList");
console.log(list);
list.innerText = "dev";// changing value through innertext

//5 text content(Shows content from hidden element)
let hidden = document.querySelector("h4");
console.log(hidden);
let showContent = hidden.textContent;
console.log(showContent); // getting the hidden content...

//6. getAttribute();
let paragraph = document.querySelector("#para2");
console.log(paragraph)
let value = paragraph.getAttribute("id")
console.log(value);

let heading = document.querySelector("h1");
console.log(heading.getAttribute("class"));

//7. setAttribute();
let heading2 = document.querySelector("h1");
console.log(heading2.setAttribute("class", "H1"))

//8. node.style
let div = document.querySelector("div");
console.log(div.style.backgroundColor = "red");

div = document.querySelector("#divP");
console.log(div.style.backgroundColor = "white");

div = document.querySelector("#divP");
console.log(div.style.color="black");


//--------------------------------------DOM Manipulation--------------------------------------

//1. Append Elemnt(at Last)

/* Followed by two steps
    i. Create the new element
    ii. append the new element at last of the node 
*/
let Btn = document.createElement("button"); // creating element
Btn.innerText = "Launch Nuclear Weapon";
console.log(Btn);
let divAppend = document.querySelector("div");
divAppend.append(Btn); //appending element

//2. Prepend(at the beggning)
let Btn2 = document.createElement("button"); // creating element
Btn2.innerText = "Launch Nuclear Weapon";
console.log(Btn2);
let divAppend2 = document.querySelector("div");
divAppend2.prepend(Btn2); //prepending element

//3. node.before
let Btn3 = document.createElement("button"); // creating element
Btn3.innerText = "Launch Nuclear Weapon";
console.log(Btn3);
let divAppend3 = document.querySelector("div");
divAppend3.before(Btn3); //adds element before any node you wish

//4.node.after
let Btn4 = document.createElement("button"); // creating element
Btn4.innerText = "Launch Nuclear Weapon";
console.log(Btn4);
let divAppend4 = document.querySelector("div");
divAppend4.after(Btn4); //adds element after any node you wish

//5.node.remove
let removeEl = document.querySelector("div");
removeEl.remove(Btn4); //removes element of any node you wish