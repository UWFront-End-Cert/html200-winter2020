var amount = 1000;

function start() {
  const command = prompt("Please enter your command");

  switch (command) {
    case 'Q':
      alert('Thank you, see you later!')
      break;
    case 'W':
      const withdraw = prompt('Enter your amount to withdraw')
      if (amount - withdraw < 300) {
        var isSure = confirm("Are you sure to withdraw?")

        if (isSure) {
          amount = amount - withdraw;
          alertMessage('Succesfully withdrew');
        } else {
          alertMessage('Cancelled!')
        }
      } else {
        amount = amount - withdraw;
        alertMessage('Succesfully withdrew');
      }
      start();
      break;
    case 'D':
      const deposit = prompt('Enter your amount to deposit');
      if (deposit > 50000) {
        alertMessage('Your deposit limit is 50K');
      } else {
        amount = amount + Number(deposit);
        alertMessage('Succesfully deposited');
      }
      start();
      break;
    case 'B':
      alert("Your current balance: " + amount);
      start();
      break;
  }
}

function alertMessage(message) {
  console.log(amount);
  alert(message)
}
