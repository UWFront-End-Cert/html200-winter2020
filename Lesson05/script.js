
let balance = 100000;

//The user should see a prompt so they can type which action to perform.
//inputOne = prompt('Welcome to Bank of Jennifer! Thank you for being one of our valued customers. What would you like to do today? Your options are:' + '\n' + 'Q(uit), W(ithdraw), D(eposit), B(alance)' + '\n' + 'Please enter one of the letters below:');

//The user will have a list of 4 actions to choose from.

//The program will loop asking for input until the user enters Q.
//Enter Q to quit (immediately quits the program).
input = prompt('Welcome to Bank of Jennifer! Thank you for being one of our valued customers. What would you like to do today? Your options are:' + '\n' + 'Q(uit), W(ithdraw), D(eposit), B(alance)' + '\n' + 'Please enter one of the letters below:');

//The user should see a prompt so they can type which action to perform.
function bankApp(input) {
  switch (result) {
    case 'Q':
      return 'Have a great day! Hope to see you again soon!';
      break;
    case 'W':
      return 'function withdrawMoney(W)';
      break;
    case 'D':
      return 'function depositMoney(D)';
      break;
    case 'B':
      return 'function balance(B))';
      break;

  }

  //Enter W to withdraw.
    withdrawal = 0;

    function withdrawMoney(W) {

      //The user will be prompted again to enter an amount to withdraw.
      let withdrawal = prompt('How much would you like to withdraw?');
      result = balance - withdrawal;
      for (let withdrawal = 0; withdrawal < balance - 300; withdrawal++) {
          if (withdrawal < balance - 300) {
            alert('You now have ' + balance - 300 + 'in your account.');

            //After withdrawing money, they should be able to type another option.
            return alert(inputOne);
            break;
          } else if (withdrawal > balance) {
            let secondInput = prompt('You do not have enough money. You are at risk of overdrawing and receiving an overdraft charge. Please enter another amount:');
            result = balance - withdrawal;

            //After withdrawing money, they should be able to type another option.
          } else {
            console.log(inputOne);
            break;
          }
      }
    }

     //Enter D to deposit.
     deposit = 0;

     function depositMoney(D) {

       //The user will be prompted again to enter an amount to deposit.
       let deposit = prompt('How much would you like to deposit?');
       result = balance + deposit;
       for (let deposit = 0; deposit <= 50000; deposit++) {
         if (deposit <= 50000) {
           alert('You now have ' + [balance + deposit] + 'in your account.');

           //After depositing money, they should be able to type another option.
           return alert(inputOne);
           break;
         if (deposit > 50000) {
           let warning = prompt('You have reached the deposit limit of $50,000. Please put in another amount:');
           result = balance + warning;

           //After depositing money, they should be able to type another option.
         } else {
           console.log(inputOne);
           break;
         }
         }
       }
     }
     //The user will see their balance.
     function balance(B) {
        let currentBalance = balance - withdrawal + deposit;
        alert(currentBalance);

     }
 }
