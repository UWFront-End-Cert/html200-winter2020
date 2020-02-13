

/*Write pseudocode for a bank application
  – The user should see a prompt so they can type which action to perform
  – The user will have a list of 4 actions to choose from
> Enter Q to quit (immediately quits the program)
> Enter W to withdraw
  – The user will be prompted again to enter an amount to withdraw. After
withdrawing money, they should be able to type another option.
> Enter D to deposit
  – The user will be prompted again to enter an amount to deposit. After
depositing money, they should be able to type another option.
> Enter B to view balance
  – The user will see their balance. Afterwards, they should be able to
type another option.
  – The program will loop asking for input until the user enters Q

// give a prompt for the user with the four letter options
    Enter Q to quits
    Enter W to withdraw
    Enter D to deposit
    Enter B to view balance
*/

let balance = 1000;
let session = true;

while (session) {


  let bankOption = prompt('Q(uit), W(ithdraw), D(eposit), B(alance)');
  console.log(bankOption);

  switch (bankOption) {
    case 'Q':
      alert(`You are a quiter!`);
      // how to quit the app...
      session = false;
      break;
    case 'W':
      let withdrawAmt = Number(prompt(`Enter the amount you would like to Withdraw`));
      console.log (withdrawAmt);
      balance = balance - withdrawAmt;
      alert(`Your updated Balance is: $${balance}`);
      // error handling for if balance goes negative - alert user they have insufficient funds for transaction
      break;
  case 'D':
      let depositAmt = Number(prompt(`Enter the amount you would like to Deposit.`));
      console.log (depositAmt);
      balance = balance + depositAmt;
      alert(`Your updated Balance is: $${balance}`);
      // error handling to say the user exceeded 500,000 max deposit amount
      break;
  case 'B':
      alert(`Your Balance is $${balance}`);
      break;
  default:
    alert(`You did not enter a valid option. Please enter either Q, W, D, or B`);
    break;
  }
}

alert(`You have exited the App. To begin again, refresh the page.`);



  // first part starting balance in bank account
  // second part loop
  // third part switch
  // fourth part function

  // Enter Q will quit the program


  // Enter W will prompt user to enter an amount and then type another bank option
      // need a prompt window to enter value to withdraw
      // determine if balance is high enough to allow withdraw
      // alert new balance or message saying there is not enough money


  // Entering D will prompt user to enter an amount and then type another bank option
      // need a prompt window to enter value to deposit
      // determine if balance is too high to allow deposit
      // alert new balance or message saying there is too much money



  // entering B will show the balance 'Alert' and then type another bank option
      // need a prompt to enter value to show balance
      // alert balance


  // user enters option until Q is entered
