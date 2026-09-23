class Counter{
    constructor(){
        this.counter = document.getElementById("counter");
        this.counter.innerText = 0;
    }
    Increment(){
        let btn = document.getElementById("btn");
        btn.addEventListener("click",()=>{    
         this.inc = this.counter.innerText++;
        });
    }
    Decrement(){
        let dec = document.getElementById("decrement");
        dec.addEventListener("click",()=>{
          this.dec= this.counter.innerText--;
        });
    }
    dbl(){
        let mul = document.getElementById("mul");
        mul.addEventListener("click", ()=>{
            let result = Number(this.counter.innerText) * 2;
            this.counter.innerText = result;           
        });
    }
    sqr(){
        let dbl = document.getElementById("dbl");
        dbl.addEventListener("click", ()=>{
            this.inc;
            
            
        })
    }
    Reset(){
        let reset = document.getElementById("reset");
        reset.addEventListener("click",()=>{
            if(this.counter.innerText == 0){
                alert("already 0")
            }else{
                this.counter.innerText = 0;
            }
        });
    }
    Saved(){
        let save = document.getElementById("save");
        save.addEventListener("click",()=>{
            this.container = document.getElementById("saved");
            this.p = document.createElement("p");
            this.p.innerText = `The last saved counter is ${this.counter.innerText}`;
            let simple = this.container.appendChild(this.p);
        });
    }
    eraseEntry(){
        let erase = document.getElementById("erase");
        erase.addEventListener("click",()=>{
            this.container.remove(this.p);
        });
    }
}
const count = new Counter();
count.Increment();
count.Decrement();
count.dbl();
count.sqr();
count.Reset();
count.Saved();
count.eraseEntry();