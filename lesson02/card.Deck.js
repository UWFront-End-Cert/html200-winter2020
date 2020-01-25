var deck = new Array();
var suits = ['spades', 'diamonds', 'clubs', 'hearts'];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

for (i = 0; i < suits.length; i++) {
  for (x = 0; x < values.length; x++) {
    var card = {
      Value: suits[i],
      Suit: values[x]
    };
    deck.push(card);
  }
}

console.log(deck);