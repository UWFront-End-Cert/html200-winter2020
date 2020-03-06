//dewey, cheetem and howe javascript page
function bankAction() {
let cashMonies = 5000;
let bobsFunMoney = 40000;

let bankAction = true;

   while(bankAction === true) {
     let select = prompt('Enter w for Withdraw, d for Deposit, b for Balance, t for tranfer or q for Quit');

     if(select === 'q') {

       alert('See ya later!');
       bankAction = false;

     } else if(select === 'w') {



       bankAction = withdrawing();
       bankAction = true;

     } else if(select === 'd') {

       bankAction = depositing();
       bankAction = true;

     } else if(select === 'b') {

        bankAction = balancing();
        bankAction = true;
     } else if (select === 't') {

       bankAction = transferring();
       bankAction = true;
     }

};

  function withdrawing() {
     let input = prompt('Enter the amount you want to take out (if you must)');


     cashMonies = cashMonies - Number(input);
     alert('You now have' + ' ' + '$' + cashMonies + ' ' + 'Lucky you!');
   };

   function transferring() {
     let input = prompt('Enter amount you want to transfer');
     cashMonies = cashMonies - Number(input);
     bobsFunMoney = bobsFunMoney + Number(input);

     alert('you now have' + ' ' + '$' + bobsFunMoney);
   }

   function depositing() {
      let input = prompt('Enter the amount you want to put in (gimmie gimmie)');


      cashMonies = cashMonies + Number(input);
      alert('You now have' + ' ' + '$' + cashMonies + ' ' + 'Lucky us!');
    };

  function balancing() {
     alert('Wow! Lookit all dem bananas! Your new balance is' + ' ' + '$' + cashMonies + ' ' + '$' + bobsFunMoney);

   };

 };
