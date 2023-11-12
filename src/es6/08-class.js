/* Class in ES6 */

/* class User{

    greeting(){
        return 'Hello';
    }
}; */


// const newUser = new User(); //Instancia de este objeto.

/* 
const newUser = new User();
console.log(newUser.greeting());

const anotherUser = new User();
console.log(anotherUser.greeting())
 */

//Constructor

// class User{
//     // create a constructor 
//     constructor(){
//         console.log('New User');
//     }
//     greeting(){
//         return 'Hello';
//     }
// }

// const darvin = new User();


// This,  hace referencia al elemento padre que lo contiene.
class user {

    constructor(name = 'Darvin'){
        this.name = name;
    }

    // Metodos
    speak(){
        return 'hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
} 

const emil = new user();
console.log(emil.greeting());

// getters and setters

class user{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // Metodos
    speak(){
        return 'hello'
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(newAge){
        this.age = newAge;
    }
}


const developer = new user('darvin',26);

console.log(developer.uAge);
console.log(developer.uAge = 27);

