const promise1 = new Promise((resolve,reject) => reject("Reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 2"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
    .catch(err => console.error(err))
    .finally(() => console.log("All Promise is execute"));