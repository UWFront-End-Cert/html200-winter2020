/*
Write a program that prints out the values of a deck of cards
*/

let suit;
for (let s = 0; s < 4; s++) {
    
    if (s === 0) {
        suit = 'Clubs';
    } else if (s === 1) {
        suit = 'Diamonds';
    } else if (s === 2) {
        suit = 'Hearts';
    } else {
        suit = 'Spades';
    }
    
    console.log(`Ace of ${suit}`);
 
    let i = 2
    for (i; i <= 10; i++) {
        console.log(`${i} of ${suit}`);
    }

    console.log(`Jack of ${suit}`);
    console.log(`Queen of ${suit}`);
    console.log(`King of ${suit}`);
}
for (i = 0; i < 2; i++) console.log('Joker');


