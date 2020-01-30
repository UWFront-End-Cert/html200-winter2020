//declaring variable and take a sentence of at least five words and a period.
let sentence = prompt("Enter a sentence and a period at the end");

let wordsArray = sentence.split(' '); // creating array from the sentence
console.log(wordsArray);

console.log(wordsArray[2]);// displaying the third word
