/*pseudocode area
declare an object named ATM, it should have balance, options(functions), and a start functions

declare 5 functions, getOption(), quit(), withdraw(), deposit(), and viewbalance()
check negative balances and warn of low balance in withdraw()
check deposit cap in deposit()

use switch match 'N', 'W', 'D', 'Q' in start()
*/

let ATM = {
  balance: 1000,
  start: function() {
    let shouldNotQuit = true;
    while(shouldNotQuit) {
      let option = (this.getOption()).toUpperCase();
      switch (option) {
        case 'Q':
          this.quit();
          shouldNotQuit = !shouldNotQuit;
          break;
        case 'W':
          this.withdraw();
          break;
        case 'D':
          this.deposit();
          break;
        case 'B':
          this.viewBalance();
          break;
        default:
          alert('Please select a letter from the list to do an option which you like.');
          break;
      }
    }
  },

  getOption: function() {
    return prompt('Please enter an option. You can enter Q to quit, W to withdraw, D to deposit, B to view balance.', 'none');
  },

  quit: function() {
    alert(`You will quit and the balance now is: ${this.balance}`);
  },
  withdraw: function() {
    let withdrawAmount;
    do {
      withdrawAmount = prompt('Please enter the amount you want to withdraw', '0');
      withdrawAmount = Number(withdrawAmount); //This helps a lot
      if (isNaN(withdrawAmount)) {
        alert(`Sorry, this input did not accept, because it needs a number. The balance now is: ${this.balance}.`);
      } else if (withdrawAmount < 0) {
        alert(`Sorry, this input did not accept, because it needs a positive number. The balance now is: ${this.balance}.`);
      } else if (this.balance - withdrawAmount < 0) {
        alert(`Sorry, the balance now is: ${this.balance}. It is less than the amount you want to withdraw.`);
      } else {
        this.balance -= withdrawAmount;
        alert(`You can continue to choose another option, and the balance now is: ${this.balance}`);
      }
    } while (isNaN(withdrawAmount) || withdrawAmount < 0 || this.balance - withdrawAmount < 0);
  },
  deposit: function() {
    let depositAmount;
    do {
      depositAmount = prompt('Please enter the amount you want to deposit.', '0');
      depositAmount = Number(depositAmount);
      if (isNaN(depositAmount)) {
        alert(`Sorry, this input did not accept, because it needs a number. The balance now is: ${this.balance}.`);
      } else if (depositAmount > 50000) {
        alert(`Sorry, this input did not accept, because the deposit cap is $50000, and the balance now is: ${this.balance}`);
      } else if (depositAmount < 0) {
        alert(`Sorry, this input did not accept, because the deposit amount needs a positive number, and the balance now is: ${this.balance}`);
      } else {
        this.balance += depositAmount;
        alert(`You can continue to choose another option, and the balance now is: ${this.balance}`);
      }
    } while (isNaN(depositAmount) || depositAmount > 50000 || depositAmount < 0);
  },
  viewBalance: function() {
    alert(`Your balance is: ${this.balance}`);
  },

}
