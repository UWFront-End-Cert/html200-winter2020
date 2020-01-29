/* Declare a first name, a last name, an age and a variable that is 16.
Your program should compare the driver's age with the driving age.
If they are old enough to drive it should console log the first name and last name
*/

const firstName = 'Taylor';
const lastName = 'Sommers';
let driverAge = 27;
const legalDriveAge =16;
const drivingTime = driverAge - legalDriveAge;

//check to see if I am legal to driver
// if I am, print Taylor Sommers can drive and has been driving for X years

if (driverAge >= legalDriveAge) {
  console.log(firstName + ' ' + lastName + ' ' + 'can drive and has driven for'  + drivingTime + ' years');


// if I am not legal to drive, console log down from 5

} else {
  for (let i = 5; i > 0; i--) {
  console.log(i);
}
