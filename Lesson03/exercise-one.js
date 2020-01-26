const arr = ['chesse', 'pepperoni', 'olives', 'mushrooms', 'peppers'];

arr.push('sausage');
console.log(arr);

arr.splice(2,1);
console.log(arr);

const str = arr.join(', ');
console.log(str);
