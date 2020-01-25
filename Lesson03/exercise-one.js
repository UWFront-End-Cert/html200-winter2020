// Do a console log after each item
// Create an array, with at least 5 strings
// Add an element to the end of the end of the array
// Remove the third element
// Create a string from the elements and comma separate them

let archerCast = ['Archer', 'Lana', 'Mallory', 'Ray', 'Pam', 'Cheryl', 'Cyril', 'Krieger'];
console.log(archerCast);

archerCast.push('Woodhouse');
console.log(archerCast);

let mother = archerCast.splice(2, 1);
console.log(mother);

let fullArcherCast = archerCast.join(', ');
console.log(fullArcherCast);

