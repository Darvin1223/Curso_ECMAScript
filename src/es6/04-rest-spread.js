/* rest-speard */

//there are two away, array destructution and Object destructution

/* Arrays destructuring */
let fruits = ['Apple','Banana'];
let [a,b] = fruits;
let [Apple,Banana] = fruits;
console.log(a,b);
console.log("------");
console.log(Apple,Banana);
console.log("-------");
console.log(a,fruits[1]);

/* Objects Destructuring */
const user = { username: 'Darvin', age: 26};
let {username, age} = user;
