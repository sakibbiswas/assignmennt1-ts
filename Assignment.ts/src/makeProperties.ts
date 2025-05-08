{

// Problem 4 


class Vehicle {
    private make: string;
    private year: number;
  
    
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
   
    getInfo(): string {
      return (`Make: ${this.make}, Year: ${this.year}`);
    }
  }
  

// Create a Car class extending Vehicle
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make,year);
      this.model = model;
    }
  
  
    getModel(): string {
      return (`Model: ${this.model}`);
    }
  }
  
  //Given Example Usage:
  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo());          // Output: "Make: Toyota, Year: 2020"
  console.log(myCar.getModel());         // Output: "Model: Corolla"
  


}