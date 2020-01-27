let arr = ['man', 'bear', 'pig', 'Stan', 'Cartman'];

arr.push('Butters');
console.log(arr);

arr.splice(2,1);
console.log(arr);

let str = arr.join(', ');
console.log(str);