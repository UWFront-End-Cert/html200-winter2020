let pets = ['cats', 'dogs', 'parrots', 'dragons', 'rabbits'];

console.log(pets);

const petsList = pets.join(', ');

console.log(petsList);

pets.forEach(function(item, index, array) {
  console.log(index, [', '], item)
})
