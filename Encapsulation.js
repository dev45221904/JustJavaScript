// Encapsulation Example // Privating the element
class PasswordManager {
  #password;
  setPassword() {
    this.#password = prompt(
      "Enter the Password to access the page(minimum length of 8 characters)",
    );

    while (this.#password.length < 8) {
      alert("Password requirements does not match");
      this.#password = prompt(
        "Enter the Password to access the page(minimum length of 8 characters)",
      );
    }
    alert("Password requirments matched");
  }
  checkPassword() {
    let check = prompt("confirm the password");
    while (check != this.#password) {
      alert("Passwords does not match");
      check = prompt("confirm the password");
    }
    if (check == this.#password) {
      alert("Now you can see the page");
    }
  }
}
const pass = new PasswordManager();
pass.setPassword();
pass.checkPassword();

// ------------------------------Login Logic(with hardcoded data)-----------------------------------
class PasswordManager{
  #password = "Dev@12345";
  checkPassword(){
    let askUser = prompt("Enter the correct password to view this page");
    while(askUser != this.#password){
      alert("Wrong password. Enter again")
      askUser = prompt("Enter the correct password to view this page");
    }
    alert("Now you can see this page");
  }
}
const obj = new PasswordManager();
obj.checkPassword();