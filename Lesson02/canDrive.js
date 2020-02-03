//Declare a first name
const firstName = 'Jennifer ';

//Declare a last name
const lastName = 'Lee ';

//Declare an age
let age = 37;

//Declare a variable that is 16
drivingAge = 16;

//Declare how long they've driven
drivingTime = age - drivingAge;

/*If they are old enough to drive it should console log the first name and last
name can drive and how long they've driven*/
if (age >= 16) {
  console.log(firstName + lastName + 'can drive and has driven for ' + drivingTime + 'years.')

 //If they are too young, log a countdown from 5.*/
} else if (age < 16) {
    for (i = 5; i > 0; i--) {
      console.log(i);
    }
}
