let bankOpen = true;
let balance = 1000;

while (bankOpen) {
  let userInput = prompt('Choose your options, Q = Quit, W = Withdraw, D = Deposit, B = Balance');

  switch (userInput.toLowerCase()) {
    case 'q':
      quit();
      break;
    case 'w':
      withdraw();
      break;
    case 'b':
      viewBalance();
      break;
    case 'd':
      deposit();
      break;

    default:
      alert('Not recognized as a option, choose different value')
  }
  function deposit(){
    let depositMessage = prompt('Enter a deposit amount', '0');
    balance = balance + Number(depositMessage);
    alert(balance);
  }
  function quit(){
  bankOpen = false;
  alert('Thanks for banking with us')
  }
  function viewBalance(){
    alert(balance);
  }
  function withdraw(){
    let withdrawMessage = prompt('Please enter the amount you want to withdraw','0');
    balance = balance - Number(withdrawMessage);
    alert(balance);
  }
}
