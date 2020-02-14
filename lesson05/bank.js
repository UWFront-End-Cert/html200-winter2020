


function YourBanking() {

    let balance = 5000
    let bankOpen = true;

      while (bankOpen) {
        let userInput = prompt('Enter a value: L(Logout), B(View Balance), D(Deposite), W(withdrawal)');

        switch (userInput.toUpperCase()) {
          case 'L':
          bankOpen = false;
            break;
          case 'B':
            alert('Your Balance is $' + balance);
            break;
          case 'D':
            deposite()
            break;
          case 'W':
            withdraw()
            break;
        }
      }
      function deposite() {
        let depositeMessage = prompt('Enter an Amount to deposite');
        balance = balance + Number(depositeMessage);
        alert('Your Balance is $' + balance)
        }
      function withdraw() {
        let withdrawMessage = prompt('Enter an Amount to withdraw')
        balance = balance - Number(withdrawMessage);
        alert('Your Balance is $' + balance)
      }

}
  // create a box that ask for customer name.
  // once they enter their name, display 1-their ballance,

  function YourBank() {
    let balance = 5000
    result = 'Your Balance is ' + "$" + balance;
    alert(result);
  }

  // to logout

  function logout() {
    result = 'Thank you for using Diallo Bank, you may now close your browser'
    alert(result);
  }
  // withdrawal function
  function withdrawal() {
    let balance = 5000
    let input = prompt ('Your Balance is $5000: Enter the amount to withdraw');
    let withdrawal = input
    let result = 0;

    result =  Number(balance) - withdrawal;

    alert(result);
  }


  // deposite function
  function deposite() {
    let balance = 5000
    let input = prompt ('Your Balance is $500. Enter the amount to deposite');
    let deposite = input
    let result = 0;

    result = balance + Number(deposite);

    alert(result);
  }
