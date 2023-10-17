function fullsum() {
    let total = 0; 
    return function plus(number) {
      total += number;
      return total;
    };
  }
  const sum = fullsum();
  console.log(sum(3)); 
  console.log(sum(6)); 
  console.log(sum(9)); 
  console.log(sum(12)); 
  

  function name(x) {
    return function(y) {
      return x * y;
    };
  }
  const num = name(5)(2);
  console.log(num);
  

  function num100(maxAttempts) {
    for (let i = 0; i < maxAttempts; i++) {
      const num = prompt(`Введіть число більше 100`);
      if (num === null) {
        console.log('Вихід з циклу');
        break;
      }
      
      const number = parseFloat(num);
      if (!isNaN(number) && number > 100) {
        console.log(`Ваше число: ${number}`);
        break;
      } else {
        console.log('Введене число менше 100 або не є числом');
      }
      if (i === maxAttempts - 1) {
        console.log('Вихід з циклу');
      }
    }
  }
  
  num100(10);

  