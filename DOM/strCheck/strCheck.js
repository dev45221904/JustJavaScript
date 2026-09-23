class strCheck {
  constructor() {
    const str1 = document.querySelector("#str1");
    const str2 = document.querySelector("#str2");
    this.originalStr1 = str1.innerText;
    this.originalStr2 = str2.innerText;
  }
  Check() {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
      let str1 = document.querySelector("#str1");
      let str2 = document.querySelector("#str2");
      let result = document.querySelector("#result");
      if (str1.innerText === str2.innerText) {
        result.style.color = "Green";
        result.innerText = "This both Strings are same";
      } else {
        result.style.color = "red";
        result.innerText = "This both Strings are not same";
      }
    });
  }

  changeText2() {
    let btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", () => {
      let input = document.querySelector("#textchange").value;
      let select = document.querySelector("#slct");
      let result = select.value;
      let str1 = document.querySelector("#str1");
      let str2 = document.querySelector("#str2");
      if (result === "hidden") {
        alert("Please select a string first!");
        return;
      }
      if (input.trim() === "") {
        alert("Please enter new text first!");
        return;
      }
      if (result == "str1") {
        str1.innerText = input;
      } else if (result == "str2") {
        str2.innerText = input;
      }
    });
  }
  eraseValue() {
    let btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", () => {
      let input = (document.querySelector("#textchange").value = "");
      let select = (document.querySelector("#slct").value = "hidden");
      document.querySelector("#str1").innerText = this.originalStr1;
      document.querySelector("#str2").innerText = this.originalStr2;
      document.querySelector("#result").innerText = "";
      return (input, select);
    });
  }
}
let strcheck = new strCheck();
strcheck.Check();
strcheck.changeText2();
strcheck.eraseValue();
