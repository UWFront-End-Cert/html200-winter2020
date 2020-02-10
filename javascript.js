function alertDogInfo(name, fee, descript){
  let result = name + fee
  alert("Name: " + name + "\n" + "Adopt Fee: " + fee + "\n" +  "Breed: " + descript )
}

function addTotal(number){
  let tax = number * 0.09;
  let total = tax + number
  alert("Total: " + total.toFixed(2) )
}
