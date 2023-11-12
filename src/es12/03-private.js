class user{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    // Metodos
    speak(){ // if we add #  we set private the method
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