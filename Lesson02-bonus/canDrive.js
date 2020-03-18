function determineDriveAge()
{
  let firstName = prompt("Enter first Name");
  let lastName = prompt("Enter last Name");
  let driverAge = prompt("Enter your age");
  let drivingAge = 16;
  if(driverAge > drivingAge)
    {
    console.log(firstName + " " + lastName +  " can drive ");
    console.log("You drove " +  (driverAge - drivingAge));
    }
  else
    console.log(firstName + " " + lastName +  " too young to drive ");
}
