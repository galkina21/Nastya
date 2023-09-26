let number = 26042005;
let numberString = number.toString();
let digits = numberString.split('');
let digit = digits.join(' ');
alert(digit);  


function calc() {
    let first = Number(prompt('Перше число'));
    let second = Number(prompt('Друге число'));
    
    let sum = first + second;
    let min = first - second;
    let mnoz = first * second;
    let dil = first / second;
   alert (`
        сума: ${sum},
        різниця: ${min},
        добуток: ${mnoz},
        частка: ${dil},
    `)
}
calc()

function inputString() {
   let name = prompt('Ваше ім`я');
   let big = name.charAt(0).toUpperCase();
   let lettle = name.slice(1);
   alert(`${big}${lettle}`)}
inputString()