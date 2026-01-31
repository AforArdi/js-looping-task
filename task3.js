//Use a for...of loop to concatenate all the elements of an array into a single string.

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let newStr = '';

for (let number of numbers){
    newStr += number;
}
console.log(newStr);