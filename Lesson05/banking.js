
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
                    // check to see how amtWithdraw will affect accountBalance
                    let preAccountBalance = accountBalance - Number(amtWithdraw); 
                    if (preAccountBalance < 0) {
                        alert(`Overdraft warning! Your withdrawal cannot be greater than $${accountBalance}.`);
                        input = promptEnterCode();
                        break;
                    } else if (preAccountBalance >= 0 && preAccountBalance < 300) {
                        alert(`You will have less than $300 after withdrawing $${amtWithdraw}`);
                        alert(`Just a friendly reminder that your withdrawal cannot be greater than $${accountBalance}.`);
                        let continueWithdraw = prompt('Are you sure you want to proceed with the withdrawal? Enter Y for yes or N for no--return to main prompt.');
                        if (continueWithdraw === 'Y') {
                            accountBalance -= Number(amtWithdraw);
                            input = promptEnterCode();
                            break;
                        } else {
                            input = promptEnterCode();
                            break;
                        }
                    } else {
                        accountBalance -= Number(amtWithdraw);
                        input = promptEnterCode();
                        break;
                    }
                case 'D':
                    let amtDeposit = prompt('How much would you like to deposit?');
                    // check to make sure amtDeposit is less that the cap
                    if (amtDeposit > 50000) {
                        alert("Woah! Where'd this money come from? The deposit cap is $50,000. Try a smaller amount.");
                        input = 'D';
                        break;
                    } else {
                        accountBalance += Number(amtDeposit);
                        input =  promptEnterCode();
                        break;
                    }
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
            alert("You've chosen to logout of your account. Goodbye");
            i = -1;
            break;
        } else {
            alert("You've chosen to logout of your account. Goodbye");
            i *= -1;
            break;
        }
    }
}










