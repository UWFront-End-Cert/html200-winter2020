//Creating an array with 5 string elements
let greenVegetables = ['Spinach','Kale','Collard Greens','Romaine Lettuce','Broccoli'];

greenVegetables.push('Cabbage');// adding one element at the end of the array
console.log(greenVegetables);

greenVegetables.splice(2,1);// removing the third element
console.log(greenVegetables);

let greenVegetablesList = greenVegetables.join(','); //Creating comma separated string
console.log(greenVegetablesList);
