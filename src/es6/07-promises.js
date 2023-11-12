/* The promises are thing that could happen now, leter or never. */

const anotherFunction = () =>{
    return new Promise((resolve,reject) =>{
        if(true){
            resolve("Hey");
        }else{
            reject("Whooooops!! 😒")
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.then(() => console.log("work"))
.catch(error => console.error(error))
.finally(() => console.log("fished"));