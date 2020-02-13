
//The user should see a prompt so they can type which action to perform.
//inputOne = prompt('Welcome to Bank of Jennifer! Thank you for being one of our valued customers. What would you like to do today? Your options are:' + '\n' + 'Q(uit), W(ithdraw), D(eposit), B(alance)' + '\n' + 'Please enter one of the letters below:');

//The user will have a list of 4 actions to choose from.

//The program will loop asking for input until the user enters Q.
//Enter Q to quit (immediately quits the program).
let balance = 100000;

//The user should see a prompt so they can type which action to perform.
function bankApp() {
let balance = 100000;
let choice = prompt('Welcome to Bank of Jennifer! Thank you for being one of our valued customers. What would you like to do today? Your options are:' + '\n' + 'Q(uit), W(ithdraw), D(eposit), B(alance)' + '\n' + 'Please enter one of the letters below:');
alert(choice);

  do {
    switch (choice.toUpperCase) {
      case 'w':
        return 'function withdrawMoney()';
        break;
      case 'd':
        return 'function depositMoney()';
        break;
      case 'b':
        return 'function balance()';
        break;
    }
  }
  while (choice != 'q');


  function withdrawMoney() {
  let withdrawalQuery = prompt('How much would you like to withdraw?');
  withdrawal -= balance;
  return withdrawal;

    if (withdrawal < Number(balance - 99700)) {
      let newBalanceWithdrawal = alert('You now have ' + Number(balance - withdrawal) + 'in your account.');
      alert(newBalanceWithdrawal);
      alert(choice);
  } else if (withdrawal > balance) {
    let anotherChance = prompt('You do not have enough money. You are at risk of overdrawing and receiving an overdraft charge. Please enter another amount:');
    alert(newBalanceWithdrawal);
    alert(choice);
  } else {
    alert(choice);
  }

  function depositMoney() {
    let depositQuery = prompt('How much would you like to deposit?');
    depositMoney += balance;
    return depositMoney;

      if (depositMoney > 50000) {
        let newDeposit = prompt('You have reached the deposit limit of $50,000. Please put in another amount:');
        alert('You now have ' + Number(depositMoney) + 'in your account.');
        alert(choice);
      } else if (deposit <= 50000) {
        alert('You now have ' + Number(depositMoney) + 'in your account.');
        alert(choice);
      } else {
        alert(choice);
      }

  function balance() {
    let newBalance = balance - Number(depositMoney) + Number(withdrawal);
    alert('You now have ' + Number(newBalance) + 'in your account.');
    alert(choice);
  }
  }
}
}
