
/*The user should see a prompt so they can type which action to perform.
The user will have a list of 4 actions to choose from.
Enter Q to quit (immediately quits the program).
Enter W to withdraw.
The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
Enter D to deposit.
The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
Enter B to view balance.
The user will see their balance. Afterwards, they should be able to type another option.
The program will loop asking for input until the user enters Q.
*/

//create account object with acctBalance as property
let accountBalance = 1000;
let i = 0;
let input = prompt('Enter one of the following: Q, W, D, B', ' ');
i = i + 1;

for (i > 0; i++;) {
    switch(input) {
        case 'Q':
            alert('Your session is closed. Goodbye.');
            i = 0;
            break;
        case 'B':
            alert(`Your account balance is: ${accountBalance}`);
            input = prompt('Enter one of the following: Q, W, D, B', ' ');  
    }
}









