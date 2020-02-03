//Take a sentence of at least five words and a period.
Sentence: OMG Kobe Bryant is dead.

//Make an array from that sentence and console.log the third word.
let sentenceString = 'OMG, Kobe, Bryant, is, dead, .';
let arr = sentenceString.split(', ');
console.log(arr);
console.log(arr[2]);
