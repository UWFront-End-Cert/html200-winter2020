/*Write a simple webpage that opens an alert that takes a number from the user
and squares it and opens an alert with the result.*/

function numberSquare() {
  //Open an alert that takes a number from the user
  let input = prompt('Please enter the number of people in your party: ');

  //and squares it
   let result;
   result = Math.pow(Number(input), 2);

   //and opens an alert with the result
   alert(result);
}

/*Take two numbers from the user and return the result of multiplying them together.*/
function multiplier() {

//Take two numbers from the user
let input_1 = prompt("How many items will be donated to the auction?");
let input_2 = prompt("How many charities would you like us to send our proceeds to?");

//and return the result of multiplying them together
let result;
result = input_1 * input_2;
alert(result);
}
