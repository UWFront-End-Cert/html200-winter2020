let arr = ["bacon", "Mango", "Orange", "Banana", "Apple"];
console.log("Intial Values Of The Array:")
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

arr.push("coffe");
console.log("Add an element to the end of the end of the array:")
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

arr.splice(2, 1);
console.log("Remove the third element:");
for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

const arrayString = arr.join(',');
console.log("Create a string from the elements and comma separate them:");
console.log(arrayString);
