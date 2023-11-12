/* Caracteristicas de ES6 */
var lastName = "nuñez"; //declaracion y asignacion
lastName = "Rodriguez" // Reasignacion es cuando le asignamos otro valor a una variable.

/* Ejemplo con let */
//En este ejemplo probaremos que nos permite la reasignacion de variables.
let fruit = "apple";
fruit = "Kiwi";
console.log(fruit)


/* Ejemplo con const */
/* Aqui podemos ver que nos lanza un erro porque const no permite la reasignacion de valores. */
const animal = "Dog";
// animal = "cat";
console.log(animal)


/* Ejmeplo */

const fruits = () => {
    if(true){
        var fruit1 = "apple";
        let fruit2 = "Kiwi"; // Block Scope
        const fruit3 = "Banana"; // Block Scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();