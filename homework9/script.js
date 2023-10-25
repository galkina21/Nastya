
function Person() {
    this.name = '';
    this.age = 0;
    this.inputData = function() {
      this.name = prompt('Введіть імʼя:');
      this.age = parseInt(prompt('Введіть вік:'));
    }
    this.displayData = function() {
      console.log('Імʼя: ' + this.name);
      console.log('Вік: ' + this.age);
    }
  }
  
  function Car() {
    this.make = '';
    this.model = '';
    this.year = 0;
    this.owner = null;
    this.inputData = function() {
      this.make = prompt('Введіть марку автомобіля:');
      this.model = prompt('Введіть модель автомобіля:');
      this.year = parseInt(prompt('Введіть рік випуску:'));
    }
    this.assignOwner = function(owner) {
      this.owner = owner;
    }
    this.displayData = function() {
      console.log('Марка: ' + this.make);
      console.log('Модель: ' + this.model);
      console.log('Рік випуску: ' + this.year);
      if (this.owner) {
        this.owner.displayData();
      } 
    }
  }
  
  var person = new Person();
  person.inputData();
  
  var car = new Car();
  car.inputData();
  
  car.assignOwner(person);
 
  car.displayData();
  