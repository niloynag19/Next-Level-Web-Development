
class Person3 {
    name: string;
    roll: number;
    subject: string;

    constructor(name: string, roll: number, subject: string) {
        this.name = name;
        this.roll = roll;
        this.subject = subject;
    }
    getSleep(hour: number) {
        console.log(`You must sleep ${hour} hour`);
    }
}

// const student1=new Person("Niloy",643773,"Math");
// console.log(student1.getSleep(7));

// extends all ability form person
class Teacher3 extends Person3 { }
const teacher1 = new Teacher3("Niloy", 23, "math");


// added new property
class Student3 extends Person3 {
    address: string;
    constructor(name: string, roll: number, subject: string, address: string) {
        super(name, roll, subject)
        this.address = address
    }
}
const student1 = new Student3("niloy", 12, "math", "dhaka")
console.log(student1.address)