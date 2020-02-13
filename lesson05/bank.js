// create a box that ask for customer name.
// once they enter their name, display 1-their ballance,

function YourBank() {
  let balance = 5000
  result = 'Your Balance is ' + "$" + balance;
  alert(result);
}

// to logout

function logout() {
  result = 'Thank you for using Diallo Bank, you may now close your browser'
  alert(result);
}
// withdrawal function
function withdrawal() {
  let balance = 5000
  let input = prompt ('Your Balance is $5000: Enter the amount to withdraw');
  let withdrawal = input
  let result = 0;

  result =  Number(balance) - withdrawal;

  alert(result);
}


// deposite function
function deposite() {
  let balance = 5000
  let input = prompt ('Your Balance is $500. Enter the amount to deposite');
  let deposite = input
  let result = 0;

  result = balance + Number(deposite);

  alert(result);
}



// 2 promt them to enter Q to quit, W to withdraw,
// D to deposite, B to view ballance
//

// once customer enter Q (display
// "Thank You for Choosing Bank of America")

// once customer enter W--display max ballance
// + enter amount to withdraw

// once customer enter D--display deposite box
// where user can enter a name and they can see the total

// once customer enter B, display balance
