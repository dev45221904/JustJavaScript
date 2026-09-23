//Calling an event in js is by function method
class chngeT{
    constructor(){
        const chnge = document.querySelector("#text");
        this.para = chnge.innerText;
    }
    main(){
        let Btn = document.querySelector("#btn");
        Btn.addEventListener("click", ()=>{
            let text = document.querySelector("#text");
            if(text.innerText === this.para){
                text.innerText = "Saul Goodman";
            }else{
                text.innerText = this.para;
            }
            
        });
    }
}
const obj = new chngeT();
obj.main();

//(e) Obj It is a special object that has details about the event.
let Btn2 = document.querySelector("#dbl");
Btn2.ondblclick = (e) =>{
   let p = document.querySelector("#para")
    p.innerText = "You clicked the button two times";
}

//Event Listner (widely used for calling an event, can be accssed multple time for same event)
//No need to add "on" just the event name.
let Btn3 = document.querySelector("#btn3");
Btn3.addEventListener("mouseover", ()=>{
    let para2 = document.querySelector("#para2");
    para2.innerText = "You Hovered over the button";
})

//Q1  Create a toggle button that changes the screen to dark-mode when clicked & light-modewhen clicked again
let Btn4 = document.querySelector("#dark");
console.log(Btn4);
Btn4.addEventListener("click",() =>{
    let body = document.querySelector("body");
    body.style.backgroundColor ="black";
    let heading = document.querySelector("#h1");
    heading.style.color = "white";
    div = document.querySelector("div");
    div.style.color = "white";
    p = document.querySelector("#para");
    p.style.color = "white";
    para2 = document.querySelector("#para2");
    para2.style.color = "white";
});

let Btn5 = document.querySelector("#light");
Btn5.addEventListener("click",() =>{
    let body = document.querySelector("body");
    body.style.backgroundColor ="white";
    let heading = document.querySelector("#h1");
    heading.style.color = "black";
    div = document.querySelector("div");
    div.style.color = "black";
    p = document.querySelector("#para");
    p.style.color = "black";
    para2 = document.querySelector("#para2");
    para2.style.color = "black";
});
