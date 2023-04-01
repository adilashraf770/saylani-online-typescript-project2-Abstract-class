"use strict";
/// Rental System of Vehicle like Car, MotorCycle and Truck
class Vehicle {
    constructor(make, model, year, isRented) {
        this._isRented = false;
        this._make = make;
        this._model = model;
        this._year = year;
        this._isRented = isRented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    getIsRented() {
        return this._isRented;
    }
    setIsRented(rented) {
        this._isRented = rented;
    }
    /// Vehicle  Renting
    rent() {
        if (this.getIsRented()) {
            console.log("Sorry this Vehicle is NOT avaliable");
        }
        else {
            this.setIsRented(true);
            console.log("This Vehicle is avaliable for You");
        }
    }
    /// Vehicle Returning
    return() {
        if (this.getIsRented()) {
            this.setIsRented(false);
            console.log("Thank you for returning your Vehicle.");
        }
        else {
            console.log("This Vehicle is NOT Currently rented.");
        }
    }
}
/// MotorCycle Vehicle class
class Motorcycle extends Vehicle {
    constructor(make, model, year, petrolAverage, isRented = true) {
        super(make, model, year, isRented);
        this._petrolAverage = petrolAverage;
    }
    rentalRate() {
        return 500;
    }
    getPetrolAverage() {
        return this._petrolAverage;
    }
}
/// Car Vehicle class
class Car extends Vehicle {
    constructor(make, model, year, color, isRented = true) {
        super(make, model, year, isRented);
        this._color = color;
    }
    rentalRate() {
        return 1000;
    }
    getColor() {
        return this._color;
    }
}
/// Truck Vehicle class
class Truck extends Vehicle {
    constructor(make, model, year, maxSpeed, isRented = true) {
        super(make, model, year, isRented);
        this._maxSpeed = maxSpeed;
    }
    rentalRate() {
        return 2000;
    }
    get MaxSpeed() {
        return this._maxSpeed;
    }
}
console.log("----------------Motorcycle Details-------------");
const motorcycle = new Motorcycle("Hondaa", "RR", 2000, 150, false);
console.log("MotorCycles Petrol Average is " + motorcycle.getPetrolAverage());
console.log("Rental Rate is " + motorcycle.rentalRate());
console.log(motorcycle.rent());
console.log(motorcycle.return());
console.log("----------------Car Details--------------");
const car1 = new Car("Honda", "Civic-3221", 2015, "blue", false);
console.log("Rental Rate is " + car1.rentalRate());
console.log("Car Color is " + car1.getColor());
console.log(car1.rent());
console.log(car1.return());
console.log("----------------Truck Details--------------");
const truck1 = new Truck("Ford", "f2-2350", 2016, 200, false);
console.log("Max Speed is " + truck1.MaxSpeed);
console.log("Rental Rate is " + truck1.rentalRate());
console.log(truck1.rent());
console.log(truck1.return());
//# sourceMappingURL=index.js.map