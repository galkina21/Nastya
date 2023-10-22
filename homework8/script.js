let ladder = {
    step: 0,
    up: function () {
      this.step++;
      return this; 
    },
    down: function () {
      this.step--;
      return this; 
    },
    showStep: function () {
      console.log(this.step);
      return this; 
    }
  };
  ladder.up().down().up().up().down().down().showStep(); 
  ladder.up().up().up().showStep(); 
  ladder.down().showStep(); 
  