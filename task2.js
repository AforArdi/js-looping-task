// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

function getEven(arr){
    const evens = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 === 0){
            evens.push(arr[i]);
        }
    }
    return evens;
}

console.log(getEven(numbers));