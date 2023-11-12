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

.catch(error => console.error(error))
.finally(() => console.log("fished"));