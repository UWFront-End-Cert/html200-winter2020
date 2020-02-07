
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

//create account object with acctBalance as property?
let accountBalance = 1000;
let input = prompt('Enter your code');

for (let i = 0; i >= 0; i++) {
    if (i >= 0 && input !== 'Q') {
        switch(input) {
            case 'W':
                input = prompt('Enter your code');
                break;
            case 'B':
                input =  prompt('Enter your code');
                break;
            default:
                input =  prompt('Enter your code');
                break;
        }
    } else if (i === 0 && input === 'Q') {
        alert('Goodbye');
        i = -1;
        alert(`${i}`);
        break;
    } else {
        i *= -1;
        alert(`${i}`);
        break;
    }
}









