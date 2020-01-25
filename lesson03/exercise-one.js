let arr = ['horse', 'goat', 'sheep', 'camel,', 'yak'];
console.log(arr);

arr.push('cow');
console.log(arr);

arr.splice(2, 1);
console.log(arr);

let str = arr.join(' , ');
console.log(str);