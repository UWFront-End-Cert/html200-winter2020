let textToAlert;
let number = prompt("Please enter a number:");
if (number == null || number == "") {
  textToAlert = "User cancelled the prompt.";
} else {
  textToAlert = number * number;
}
alert(textToAlert)

let textToAlert2;
let number1 = prompt("Please enter a number:");
let number2 = prompt("Please enter another number:");
if (number1 == null || number1 == "" || number2 == null || number2 == "") {
  textToAlert2 = "User cancelled the prompt.";
} else {
  textToAlert2 = number1 * number2;
}
alert(textToAlert2)
