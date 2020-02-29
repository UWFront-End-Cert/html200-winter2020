//dewey, cheetem and howe javascript page
function bankAction() {
let cashMonies = 5000;

let bankAction = true;

   while(bankAction === true) {
     let select = prompt('Enter w for Withdraw, d for Deposit, b for Balance or q for Quit');

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
     }

};

  function withdrawing() {
     let input = prompt('Enter the amount you want to take out (if you must)');
     let result = 0;

     result = cashMonies - Number(input);
     alert('You now have' + ' ' + '$' + result + ' ' + 'Lucky you!');
   };

   function depositing() {
      let input = prompt('Enter the amount you want to put in (gimmie gimmie)');
      let result = 0;

      result = cashMonies + Number(input);
      alert('You now have' + ' ' + '$' + result + ' ' + 'Lucky us!');
    };

  function balancing() {
     alert('Wow! Lookit all dem bananas! Your new balance is' + ' ' + '$' + cashMonies);
   };

 };
