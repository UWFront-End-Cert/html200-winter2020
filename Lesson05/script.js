// prompt tells use to enter Q (quit), W (withdraw), D (deposit), B (balance), Q (quit)

// if enter Q program quits

// if enter W user is propted to enter an amount to withdraw - after entering amount should be
// able to type another option

// if enter D user is propted to enter an amount to deposit - after entering amount should be
// able to type another option

// if enter B user will see their balance - after viewing balance shold be able to type another option

// program will loop asking for input until user enters Q to quit


let balance = 1000;

function bankApp(actions) {
  const input = prompt(actions);

  switch (input) {
    case 'Q':
      alert('Thanks for banking with us!');
      break;
    case 'W':
      let withdrawNum = prompt('Enter an amount to withdraw:');
      balance -= Number(withdrawNum);

      alert('Current balance: ' + '$' + balance);
      do {
        bankApp(actions);
      } while (input = 'W' || 'D' || 'B');
      break;
    case 'D':
      let depositNum = prompt('Enter an amount to deposit:');
      balance += Number(depositNum);

      alert('Current balance: ' + '$' + balance);
      do {
        bankApp(actions);
      } while (input = 'W' || 'D' || 'B');
      break;
    case 'B':
      alert('Current balance: ' + '$' + balance);
      do {
        bankApp(actions);
      } while (input = 'W' || 'D' || 'B');
      break;
  }
}
