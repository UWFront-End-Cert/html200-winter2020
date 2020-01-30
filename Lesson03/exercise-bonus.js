const arr = [['Hearts', 'Spades', 'Diamond', 'Club'], ['Ace', 'Two', 'Three', 'Four',
            'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']];
for (let i = 0; i < arr[0].length; i++) {
  for (let j = 0; j < arr[1].length; j++) {
    console.log(arr[1][j] + ' of ' + arr[0][i]);
  }
}
/*
"Ace of Hearts"
"Two of Hearts"
"Three of Hearts"


*/
