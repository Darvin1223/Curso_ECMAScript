const promise1 = new Promise((resolve,reject) => reject("Reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 2"));

Promise.any([promise1,promise2,promise3]) // esto capturara la primero que sea de forma satisfactoria.
    .then(response => console.log(response));