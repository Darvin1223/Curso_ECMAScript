/* With this we can to tramsform from array to an object */

const entries = new Map([["name","darvin"],["Age",26]]);
console.log(entries)
console.log(Object.fromEntries(entries));