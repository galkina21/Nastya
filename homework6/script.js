function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
const array = [3, 6, 7, 9, 12, 15, 18];
removeElement(array, 7);
console.log(array);


function calculateAverage(array) {
    let sum = 0;
    let first = 0;
    for (const element of array) {
        if (typeof element === 'number') {
            sum += element;
            first++;
        }
    }
    if (first === 0) {
        return 0; 
    }
    return sum / first;
}
const myArray = [1, 2, 'three', 4, 'five', 6];
const average = calculateAverage(myArray);
console.log(`Середнє арифметичне чисел в масиві: ${average}`);


function removeCharacters(inputString, charactersToRemove) {
    for (const char of charactersToRemove) {
        const regex = new RegExp(char, 'd');
        inputString = inputString.replace(regex, '');
    }
    return inputString;
}
const inputString = " hello world";
const charactersToRemove = ['l', 'd'];
const result = removeCharacters(inputString, charactersToRemove);
console.log(result); // "heo wor"
