// Create a bank application.
balance = 100000;
let notQuit = true;

do {
  // The user should see a prompt so they can type which action to perform.
  let choice = prompt('Welcome to Bank of Jennifer! Thank you for being one of our valued customers. What would you like to do today? Your options are:' + '\n' + 'Q(uit), W(ithdraw), D(eposit), B(alance)' + '\n' + 'Please enter one of the letters below:');

    switch (choice.toLowerCase()) {
      // Enter Q to quit (immediately quits the program).
      case 'q':
        notQuit = false;
        alert('We\'re sorry to see you go! Have a great day.');
        break;
      // Enter W to withdraw.
      case 'w':
        notQuit = true;
        withdraw();
        break;
      // Enter D to deposit.
      case 'd':
        notQuit = true;
        deposit();
        break;
      // Enter B to view balance.
      case 'b':
        notQuit = true;
        alert('Your balance is ' + balance + '.');
        break;
      default:
        alert('Sorry, but that value is not recognized. Please try again.');
    }
} while (notQuit);

// The user will be prompted again to enter an amount to withdraw.
function withdraw() {
  let withdrawQuery = prompt('How much would you like to withdraw?');
  let newBalanceWithdraw = balance - Number(withdrawQuery);

    if (Number(newBalanceWithdraw) <= 0) {
      let newWithdraw = prompt('You do not have enough money. You are at risk of overdrawing and receiving an overdraft charge. Please try again:');
      result = balance - Number(newWithdraw);
      alert('Your new balance is ' + '$' + Number(result) + '.');
    } else if (Number(newBalanceWithdraw) > 300) {
        alert('Your balance is ' + '$' + Number(newBalanceWithdraw) + '.');
    } else if (withdrawQuery != Number(withdrawQuery)) {
        alert('Sorry, but that value is not recognized.');
    } else if (Number(newBalanceWithdraw) <= 300) {
        let decision = prompt('Warning! You will have ' + '$' + Number(newBalanceWithdraw) + ' left in your account. Are you sure you want to withdraw? Write "yes" or "no".');
          switch (decision.toLowerCase()) {
            case 'no':
              alert('Your new balance is ' + '$' + balance + '.');
              break;
            case 'yes':
              alert('Your balance is ' + '$' + Number(newBalanceWithdraw) + '.');
              break;
            default:
              alert('Sorry, but that value is not recognized.');
          }
  }

// The user will be prompted again to enter an amount to deposit.
function deposit() {
  let depositQuery = prompt('How much would you like to deposit?');
  let newBalanceDeposit = balance + Number(depositQuery);

    if (Number(depositQuery) > 50000) {
      let newDeposit = prompt('You cannot deposit more than $50,000 in one day. Please put in another amount:');
      result = balance + Number(newDeposit);
      alert('Your new balance is ' + result + '.');
    } else if (depositQuery != Number(depositQuery)) {
      let numberDeposit = prompt('Sorry, but that is not a number. Please try again:');
      result = balance + Number(numberDeposit);
      alert('Your new balance is ' + result + '.');
    } else {
      alert('Your new balance is ' + newBalanceDeposit + '.');
    }
}
}


// The user will see their balance.

// Enter W to withdraw.
// The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
// Enter D to deposit.
// The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
// Enter B to view balance.
// The user will see their balance. Afterwards, they should be able to type another option.
// The program will loop asking for input until the user enters Q.
