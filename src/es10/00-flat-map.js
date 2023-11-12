/* Flat-map return a matrix from a sub-matrix */
//Flat

const array = [1,1,2,3,4,5,6,[1,2,3,4,5,6,7,[9,8,7,6]]];

console.log(array.flat(3));

// flatmap
const array1 = [1,2,3,4,5];
console.log(array1.flatMap(v => [v,v * 2]));