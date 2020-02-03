//Create an array with two arrays inside of it
const cards = [['clover', 'spade', 'heart', 'diamond'], ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']];

for (let i = 0; i < cards.length; i++) {
  for (let j = 0; j < cards[i].length; j++) {
    console.log(cards[0][i], cards[1][j]);
  }
}
