let inputNumber2 = prompt("Enter  a number");
let inputNumber3 = prompt("Enter  another number");

let product = multiplier(inputNumber2, inputNumber3);

alert('The product of the two numbers is ' + product);

function multiplier(num1, num2) {
	return num1 * num2;
}
