class Car {
    constructor(brand, model, year, speed) {
      this._brand = brand;
      this._model = model;
      this._year = year;
      this._speed = speed;
    }
  
    get brand() {
      return this._brand;
    }
  
    get model() {
      return this._model;
    }
  
    get year() {
      return this._year;
    }
  
    set year(newYear) {
      const currentYear = new Date().getFullYear();
      if (newYear <= currentYear) {
        this._year = newYear;
      } else {
        console.log("Неможливе значення року");
      }
    }
  
    get age() {
      const currentYear = new Date().getFullYear();
      return currentYear - this._year;
    }
  
    get currentSpeed() {
      return this._speed;
    }
  
    set currentSpeed(newSpeed) {
      if (newSpeed >= 0) {
        this._speed = newSpeed;
      } else {
        console.log("Неможливе значення швидкості");
      }
    }
  
    accelerate(speedIncrease) {
      this.currentSpeed += speedIncrease;
    }
  
    brake(speedDecrease) {
      this.currentSpeed -= speedDecrease;
      if (this.currentSpeed < 0) {
        this.currentSpeed = 0;
      }
    }
  }

  
  const myCar = new Car('BMW', 'MINI Cooper', 2020, 170);
  console.log(`Car is ${myCar.age} years old.`);
  
  myCar.year = 2021;
  console.log(`Car is ${myCar.age} years old.`);
  
  myCar.accelerate(15);
  console.log(`${myCar.currentSpeed} km/h.`);
  
  myCar.brake(5);
  console.log(`${myCar.currentSpeed} km/h.`);
  