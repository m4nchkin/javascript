// let taxi = {
//     make:   "Webville Motors",
//     model:  "Taxi",
//     year:   1955,
//     color:  "yellow",
//     passengers: 4,
//     convertible:    false,
//     mileage:    281341,
//     started: false,
//     fuel: 0,
//     start: function () {
//         if (this.fuel == 0) {
//             alert("The car is on empty, fill up before starting!");
//         }else {
//         this.started = true;
//         }
//     },
//     stop: function () {
//         this.started = false;
//     },
//     drive: function () {
//         if (this.started) {
//             if (this.fuel > 0) {
//             alert(this.make + " " + this.model + " goes zoom zoom!");
//             this.fuel -= 1;
//         }else {
//             alert("Uh oh, out of fuel");
//             this.stop();
//         }
//         }else {
//             alert("You need to start the engine first!");
//         }
//     },
//     addFuel: function (amount) {
//         this.fuel += amount;
//     }
// }
// let cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year:   1955,
//     color:  "tan",
//     passengers: 5,
//     convertible:    false,
//     mileage:    12892,
//     started: false,
//     start: function () {
//         this.started = true;
//     },
//     stop: function () {
//         this.started = false;
//     },
//     drive: function () {
//         if (this.started) {
//             alert(this.make + " " + this.model + " goes zoom zoom!");
//         }else {
//             alert("You need to start the engine first!");
//         }
//     }
// }
// let chevy = {
//     make:   "Chevy",
//     model:  "Bel Air",
//     year:   1957,
//     color:  "red",
//     passengers: 2,
//     covertible: false,
//     mileage:    1021,
//     started: false,
//     start: function () {
//         this.started = true;
//     },
//     stop: function () {
//         this.started = false;
//     },
//     drive: function () {
//         if (this.started) {
//             alert(this.make + " " + this.model + " goes zoom zoom!");
//         }else {
//             alert("You need to start the engine first!");
//         }
//     }
// }


// taxi.start();
// taxi.addFuel(2);
// taxi.start();
// taxi.drive();
// taxi.drive();
// taxi.drive();
// taxi.stop();
function lovefunc(flower1, flower2){
    console.log(flower1 % 2 !== flower2 % 2)
  }
  lovefunc (8,4)