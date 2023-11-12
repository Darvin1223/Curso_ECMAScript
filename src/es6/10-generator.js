/* Generator, return values  */
function* iterate(array){ //with use * when we generate a generator.
    for(let value of array){
        yield value; // yield return the value;
    }
};

const it = iterate(['adriana','olga','edgar','mario','griselda']);
console.log(it.next().value) //with this method we remenber the state
console.log(it.next().value) //with this method we remenber the state
console.log(it.next().value) //with this method we remenber the state
console.log(it.next().value) //with this method we remenber the state
console.log(it.next().value) //with this method we remenber the state