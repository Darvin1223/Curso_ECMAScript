/* Spread operator || Operador de propagacion */

//nos permite propagar la informacion a otros elementos sin tener que volverla a pasar.
let person = {name: 'darvin',age:26};
let country = 'DOM';

let data = { ...person, country}; // al agregar ... que es el operador de propagacion, propaga la informacion, en pocas palabras lo que se encuentre despues del operador de propagacion se le asignara al nuevo elemento.
// the ... is the Spread operator, we use when we need spread the informacion in a new element.
console.log(data)


/* Rest params */

function sum(num, ...values){ //we don't know what is the values, but we know that there will be values

  
    let results = 0;
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        results += element;
    }
    return num + results;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));
