
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
function promptEnterCode() {
    let answer = prompt('Enter one of the following codes: Q, W, B, or D');
    return(answer);
}

let accountBalance = 1000;
let input = null;

function handleAction() {
    input = promptEnterCode();

    for (let i = 0; i >= 0; i++) {
        if (i >= 0 && input !== 'Q') {
            switch(input) {
                case 'W':
                    let amtWithdraw = prompt('How much would you like to withdraw?');
                    accountBalance -= Number(amtWithdraw);
                    input = promptEnterCode();
                    break;
                case 'D':
                    let amtDeposit = prompt('How much would you like to deposit?');
                    accountBalance += Number(amtDeposit);
                    input =  promptEnterCode();
                    break;
                case 'B':
                    alert(`You have a balance of $${accountBalance}`);
                    input =  promptEnterCode();
                    break;
                default:
                    alert(`We're sorry, we couldn't understand your option. Please try again.`)
                    input =  promptEnterCode();
                    break;
            }
        } else if (i === 0 && input === 'Q') {
            alert('You selected Quit. Goodbye');
            i = -1;
            break;
        } else {
            alert('You selected Quit. Goodbye');
            i *= -1;
            break;
        }
    }
}










