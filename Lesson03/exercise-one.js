const arr = ['Hello', 'world', 'I', 'am', 'learning', 'JavaScript'];
console.log(arr); //["Hello", "world", "I", "am", "learning", "JavaScript"]
arr.push('now');
console.log(arr); //["Hello", "world", "I", "am", "learning", "JavaScript", "now"]
arr.splice(2, 1);
console.log(arr); //["Hello", "world", "am", "learning", "JavaScript", "now"]
let str = arr.join(',');
console.log(str); //"Hello,world,am,learning,JavaScript,now"
