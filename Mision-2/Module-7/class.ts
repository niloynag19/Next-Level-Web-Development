
class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string,public sound: string) {
        // this.name = name,
        // this.species = species,
        // this.sound = sound
    }

    makeSound(){
        console.log("The animal is making sound")
    }
}


const dog1 = new Animal("dogesh", "dog", "ghew")
const cat = new Animal("tom", "cat", "mew")
console.log(dog.name);
dog.makeSound()