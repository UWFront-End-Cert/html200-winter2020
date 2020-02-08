let x = 0

function banking() {
    let x = prompt('What would you like to do? Enter Q to quit, W to withdrawl, D to make a deposit, B to see your bank balance.');
    switch (x) {
        case 'q': {
            return 'Okay, see ya later!';
            break;
        }
        case 'w': {
            return 'Alright, you want to withdrawl some money!';
            break;
        }
    }
}

console.log(
    banking(x)
);