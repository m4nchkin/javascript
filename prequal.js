let taxi = {
    make:   "Webville Motors",
    model:  "Taxi",
    year:   1955,
    color:  "yellow",
    passengers: 4,
    convertible:    false,
    mileage:    281341
}
let cadi = {
    make: "GM",
    model: "Cadillac",
    year:   1955,
    color:  "tan",
    passengers: 5,
    convertible:    false,
    mileage:    12892
}
let chevy = {
    make:   "Chevy",
    model:  "Bel Air",
    year:   1957,
    color:  "red",
    passengers: 2,
    covertible: false,
    mileage:    1021,
    drive: function () {
        alert("Zoom Zoom!");
    }
}

function prequal (car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}
let worthALook = prequal(chevy);
if (worthALook) {
    console.log("You gotta check this " + chevy.make + " " + chevy.model);
} else {
    console.log("You should really pass on the " + chevy.make + " " + chevy.model);
}
chevy.drive();