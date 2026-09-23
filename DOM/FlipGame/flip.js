class Flip{
    flip(){
        let btn = document.getElementById("btn");
        btn.addEventListener("click", ()=>{
            this.string = document.getElementById("flip").value;
            this.reverse = this.string.split("").reverse().join("");
            this.newP = document.getElementById("new").value = this.reverse;
            return this.newP;
        });    
    }
    reset(){
        let reset = document.getElementById("reset");
        reset.addEventListener("click", ()=>{
            let string2 = document.getElementById("flip").value = "";
            console.log(string2);
            
            
        })
    }
}
const flipO = new Flip();
flipO.flip();
flipO.reset();