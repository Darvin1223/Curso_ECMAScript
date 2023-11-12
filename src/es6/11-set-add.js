const list = new Set();

list.add('Item 1');
list.add('Item 2').add('Item 3');

console.log(list);


//Quitar numero o elementos repetidos con set de un array
const numbers = [1,2,3,4,4,4,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9,1,2,2,2];
const set = new Set(numbers);
// set.delete(2);
const numbersinRepetir = Array.from(set);

console.log(numbersinRepetir)