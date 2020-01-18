/*
Declare a first name, a last name, an age and a variable that is 16. 
Your program should compare the driver's age with the driving age. 
If they are old enough to drive it should console log the first name and 
last name can drive and how long they've driven. If they are too young, log a countdown from 5.
*/

const firstName = 'Christy';
const lastName = 'Lam';
let driverAge = 34;
const drivingAge = 16;
let yearsDriven = driverAge - drivingAge;

if (driverAge >= drivingAge) { 
    //console.log(firstName + ' ' + lastName + ' has driven for ' + yearsDriven + ' years.');  
    console.log(`${firstName} ${lastName} has been driving for ${yearsDriven} years.`)  
} else {
    let i = 5;
    for (i; i >= 0; i--) {
        console.log(i);
    }
}
