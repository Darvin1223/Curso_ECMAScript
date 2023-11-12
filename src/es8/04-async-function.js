const fnAsync = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('AsynC'), 2000)
        : reject(new Error('Error!'));
    })
}

// With Async Await 
const anotherFunction = async () =>{
    const somthing = await fnAsync();
    console.log(somthing);
    console.log('Hello')

}
console.log('Before');
anotherFunction();
console.log('After')