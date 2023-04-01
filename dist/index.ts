 /// Rental System of Vehicle like Car, MotorCycle and Truck
abstract class Vehicle{
    public _make: string;
    public _model: string;
    public _year: number;
    public _isRented: boolean = false;

    constructor(make: string, model: string, year: number, isRented: boolean) {
              this._make = make;
              this._model = model;
              this._year = year;
              this._isRented = isRented;
            }
    get make(){
        return this._make;
    }
    
    get model(){
        return this._model;
    }
    
    get year(){
        return this._year;
    }
    
    public getIsRented(): boolean{
        return this._isRented;
    }
    
    public setIsRented(rented: boolean){
        this._isRented = rented;
    }

    abstract rentalRate(): number;

    /// Vehicle  Renting
    public rent(): void {   
        if (this.getIsRented()) {   
            console.log("Sorry this Vehicle is NOT avaliable");
            
        } else {
            this.setIsRented(true);
            console.log("This Vehicle is avaliable for You");
            
        }
    }
    
    /// Vehicle Returning
    public return(): void {
                      if (this.getIsRented()) {
                        this.setIsRented(false);
                        console.log("Thank you for returning your Vehicle.");
                    } else {
                        console.log("This Vehicle is NOT Currently rented.");
                      }
                    }
}

/// MotorCycle Vehicle class
class Motorcycle extends Vehicle {
        private _petrolAverage: number;
      
        constructor(make: string, model: string, year: number, petrolAverage: number, isRented: boolean = true) {
          super(make, model, year, isRented);
          this._petrolAverage = petrolAverage;
        }
      
        public rentalRate(): number {
          return 500; 
        }
      
        public getPetrolAverage(): number {
          return this._petrolAverage;
        }
      }


/// Car Vehicle class
class Car extends Vehicle {  
    private _color: string;
    constructor(make: string, model: string, year: number, color:string, isRented: boolean = true ) {
          super(make, model, year, isRented);
          this._color = color
        }
        
        public rentalRate(): number {
            return 1000;
        }

        public getColor(){
            return this._color
        }
    }
    
    /// Truck Vehicle class
class Truck extends Vehicle {
            private _maxSpeed: number;
          
            constructor(make: string, model: string, year: number, maxSpeed: number, isRented: boolean = true) {
              super(make, model, year, isRented);
              this._maxSpeed = maxSpeed;
            }
          
            rentalRate(): number {
              return 2000; 
            }
          
            get MaxSpeed(): number {
              return this._maxSpeed;
            }
           
          }    

            console.log("----------------Motorcycle Details-------------")
            const motorcycle = new Motorcycle("Hondaa", "RR", 2000,150, false);
            console.log("MotorCycles Petrol Average is " + motorcycle.getPetrolAverage())
            console.log("Rental Rate is "+ motorcycle.rentalRate());
            console.log(motorcycle.rent())
            console.log(motorcycle.return())
            

            console.log("----------------Car Details--------------")
            const car1 = new Car("Honda", "Civic-3221", 2015, "blue",false) ;
            console.log("Rental Rate is "+ car1.rentalRate());
            console.log("Car Color is "+ car1.getColor());
            console.log( car1.rent());
            console.log(car1.return());
            
            
            console.log("----------------Truck Details--------------")
            const truck1 = new Truck("Ford", "f2-2350", 2016, 200,false);
            console.log("Max Speed is "+ truck1.MaxSpeed);
            console.log("Rental Rate is "+ truck1.rentalRate());
            console.log(truck1.rent());
            console.log(truck1.return());
         