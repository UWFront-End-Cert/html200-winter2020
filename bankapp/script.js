let action = "";
let bal = 1000;
let run = true;
let amount = 0;
let funds = 0;

function banking() {
    let wit = 0;
    let dep = 0;
    while (run) {
        let action = prompt('What would you like to do? Enter Q to quit, W to withdrawl, D to make a deposit, B to see your bank balance.');
        if (action == 'q') {
            alert('Thanks, see you later!');
            run = false;
        } else if (action == 'w') {
            wit = prompt('Great, you want to withdraw some funds. How much?'); 
            withdraw(wit);
        } else if (action == 'd') {
            dep = prompt('Nice, you want to deposit some funds. How much?');
            deposit(dep);
        } else if (action == 'b') {
            alert('Your balance is $' + bal);
        }
    };
    run = true;
}

function withdraw(amount) {
    if (amount > bal) {
        alert("You don't have enough funds to do that.");
    } else {
        bal = (Number(bal) - Number(amount));
        alert("You're new balance is $" + bal);
    } 
}

function deposit(funds) {
    if (funds > 50000) {
        alert("You cannot deposit more than $50,000 at a time");
    } else { 
        bal = (Number(bal) + Number(funds));
        alert("You're new balance is $" + bal);
    }
}
