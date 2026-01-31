// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedArr = [];

// for (const color of colors){
//     reversedArr.unshift(color);
// }

// another way
for (let i = colors.length - 1; i >= 0; i--){
    reversedArr.push(colors[i]);
}

console.log(reversedArr);