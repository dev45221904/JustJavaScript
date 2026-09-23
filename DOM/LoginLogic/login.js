class Login{
    login(){
        let btn = document.querySelector("#btn");
        btn.addEventListener("click", ()=>{
            let username = document.querySelector("#username").value;
            let password = document.querySelector("#password").value;
            if(username ==''|| password == ''){
                let warn = document.getElementById("warn");
                warn.style.color = 'red';
                warn.innerText = 'Please fill both the fields!'
            }else if(username === "dev" && password === "dev123"){
                alert("logged in!")
                document.getElementById("form").reset();
                warn.innerText = '';
            }else{
                alert("invalid id or pass")
                document.getElementById("form").reset();
                warn.innerText = '';
            }  
        });
    }
}
const loginLogic = new Login();
loginLogic.login();