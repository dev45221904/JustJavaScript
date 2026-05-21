// Events with class and object
class Car {
  carGame() {
    let sit = document.querySelector("#sit");
    sit.addEventListener("click", () => {
      let parked = document.querySelector("#parkedCar");
      parked.innerText = "Lock the doors.";
      let lock = document.querySelector("#lock");
      lock.style.visibility = "visible";
      lock.addEventListener("click", () => {
        parked.innerText = "Place the key and Now doors are locked";
        let start = document.querySelector("#start");
        start.style.visibility = "visible";
        start.addEventListener("click", () => {
          parked.innerText = "Car has started";
          let seatbelt = document.querySelector("#seatbelt");
          seatbelt.style.visibility = "visible";
          seatbelt.addEventListener("click", () => {
            parked.innerText = "Great, you have worn the seatbelts.";
            let drive = document.querySelector("#drive");
            drive.style.visibility = "visible";
            drive.addEventListener("click", () => {
              parked.innerText = "Now you can drive peacefully";
            });
          });
        });
      });
    });
  }
}

const result = new Car(); /// converting class in obj
console.log(result.carGame());// calling function of class through obj

