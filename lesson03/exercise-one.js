//Create an array, with at least 5 strings
//Add an element to the end of the array
//Remove the third element
//Create a string from the elements and comma separate them


const myCats = ['beatrice', 'beau', 'lily', 'beans', 'sweets'];
console.log(myCats);

myCats.push("marshmallow");
console.log(myCats);

myCats.splice(2, 1);
console.log(myCats);

const catString = myCats.join(',');
console.log(catString);
