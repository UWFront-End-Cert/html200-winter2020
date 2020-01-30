const suits = ['Heart', 'Diamond', 'Spade', 'Club'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    console.log(ranks[j] + ' of ' + suits[i]);
  }
}
console.log('red joker');
console.log('black joker');
