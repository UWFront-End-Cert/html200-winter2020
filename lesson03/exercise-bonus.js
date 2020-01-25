let arr = [
  [
    'spades',
    'diamonds',
    'clubs',
    'hearts'
  ],
  [
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Quenn",
    "King"
  ]
];

for (let i = 0; i < arr[0].length; i++) {
  for (let j = 0; j < arr[1].length; j++) {
    console.log(arr[0][i] + ' of ' + arr[1][j])
  }
}