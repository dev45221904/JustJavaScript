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
        let sqr = document.getElementById("dbl");
        sqr.addEventListener("click", ()=>{
            let NumOnScreen = this.counter.innerText;
            let sqrr = NumOnScreen**2;
            this.counter.innerText = sqrr;
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
}
const count = new Counter();
count.Increment();
count.Decrement();
count.dbl();
count.sqr();
count.Reset();