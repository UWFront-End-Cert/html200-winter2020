let arr = [['hearts', 'diamonds', 'clubs', 'spades'], ['ace of ', 'two of ', 'three of ', 'four of ', 'five of ', 'six of ', 'seven of ', 'eight of ', 'nine of ', 'ten of ', 'jack of ', 'queen of ', 'king of ']]; 

for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++){
    console.log(arr[1][j] + arr[0][i]);
    }
}