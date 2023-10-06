let i = 1;
let s1to15 = 0;
do {
    s1to15 += i;
    i++
} while (i<=15)
console.log ('cума чисел від 1 до 15: '+ s1to15);

let dob15to35 = 1;
let x = 15;
do {
    dob15to35 *= x;
  x++;
} while (x <= 35);
console.log("Добуток чисел від 15 до 35: " + dob15to35);

let s1to500 = 0;
for (let i = 1; i <= 500; i++) {
  s1to500 += i;
}
let sa1to500 = s1to500 / 500;
console.log("середнє арифметичне чисел від 1 до 500: " + sa1to500);

let sp30to80 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sp30to80 += i;
  }
}
console.log("сума парних чисел від 30 до 80: " + sp30to80);

const line = 10;
let row = '';
for (let i = 1; i <= line; i++) {
  for (let j = 1; j <= line; j++) {
    const num = i * j;
    row += num + '\t'; 
  }
  row += '\n'; 
}
console.log(row);



