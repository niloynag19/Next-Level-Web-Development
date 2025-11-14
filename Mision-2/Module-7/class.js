var Animal = /** @class */ (function () {
    // name: string;
    // species: string;
    // sound: string;
    function Animal(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name,
        // this.species = species,
        // this.sound = sound
    }
    Animal.prototype.makeSound = function () {
        console.log("The animal is making sound");
    };
    return Animal;
}());
var dog = new Animal("dogesh", "dog", "ghew");
console.log(dog.name);
dog.makeSound();
