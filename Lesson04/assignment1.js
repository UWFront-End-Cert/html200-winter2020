let x = null;

function getOneNumber() {
  alert('This is square button, you can enter one number by clicking.');
  x = prompt('Please enter your number:');
}
function square() {
  return (x * x);
}

let y = null;
let z = null;

function getTwoNumber() {
  alert('This is multiply button, you can enter two numbers one by one.');
  y = prompt('Please enter your first number:');
  z = prompt('Please enter your second number:');
}

function multiply() {
  return (y * z);
}
