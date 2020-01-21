/* Declare a first name, a last name, an age and a variable that is 16.
Your program should compare the driver's age with the driving age.
If they are old enough to drive it should console log the first name and last name
*/

const firstName = 'Taylor';
const lastName = 'Sommers';
let driverAge = '27';
const legalDriveAge ='16';


if (driverAge >= legalDriveAge) {
  console.log(firstName + ' ' + lastName);
} else {
  console.log('you cannot drive yet');
}
