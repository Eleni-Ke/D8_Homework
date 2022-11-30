// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array = [2, 9, 12];

array.reverse();
console.log(array);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let largestElement = 0;

for (i = 0; i < array.length; i++){
    if (array[i] > largestElement) {
        largestElement = array[i];
    }
}
console.log(largestElement);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let smallestElement = largestElement;

for (i = 0; i < array.length; i++){
    if (array[i] < smallestElement) {
        smallestElement = array[i];
    }
}
console.log(smallestElement);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let onlyEvenNumbers = [];

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
   (onlyEvenNumbers.push(array[i]));
    }
}
console.log(onlyEvenNumbers);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

for (let i = array.length; i >= 0; i--) {
    if (i % 2 === 0) {
   array.splice(i, 1);
    }
}
console.log(array);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let string = "Blablabla I am a string."



let stringArray = string.split("");
console.log(stringArray);

for (i = stringArray.length; i >= 0; i--) {
    if (([i] === "a") || ([i] === "e") || ([i] === "i") ||([i] === "o") || ([i] === "u")) {
        stringArray.splice(i, 1);
    }
    
}

console.log(stringArray);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
