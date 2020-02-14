// 
//    The user should see a prompt so they can type which action to perform.
//    The user will have a list of 4 actions to choose from.
//        Enter Q to quit (immediately quits the program).
//        Enter W to withdraw.
//        The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be //  // able to type another option.
//        Enter D to deposit.
//       The user will be prompted again to enter an amount to deposit. After depositing money, they should be able //to type another option.
//       Enter B to view balance.
//        The user will see their balance. Afterwards, they should be able to type another option.
//    The program will loop asking for input until the user enters Q.


let popup = prompt('(W)ithdraw, (D)eposit, (B)alance, (Q)uit');

function bankApp() {

for ( Q = 0; Q < 5; Q++; ) {

    switch(popup) {
        case 'W':
        prompt('Withdraw');
            break;
        case 'Q':
        prompt('Quitting');
        Q++;
            break;
    }

  }
  
}
