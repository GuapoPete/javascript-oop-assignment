// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  getColor() {
    return this.color;
  }
}

let myCar = new Car("Toyota", "Camry", 2022, "Silver");

console.log("Make:", myCar.getMake());   // Output: Make: Toyota
console.log("Model:", myCar.getModel()); // Output: Model: Camry
console.log("Year:", myCar.getYear());   // Output: Year: 2022
console.log("Color:", myCar.getColor()); // Output: Color: Silver

