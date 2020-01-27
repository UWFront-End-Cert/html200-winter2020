let states = ['California', 'Washington', 'Maine', 'Texas', 'Wisconsin'];

//Add an element to the end of the array
states.push('Montana');
console.log(states);

//Remove the third element
states.splice('3', '1');
console.log(states);

//Create a string from the elements and comma-separate them
let statesList = states.join(',');
console.log(states);
