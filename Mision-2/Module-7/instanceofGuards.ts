
class Person1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getSleep(nameOfhour:number){
        console.log(`${this.name} everyday get sleep in ${nameOfhour} hour`)
    }

}

class Student1 extends Person1 {

    doStudy(nameOfhour: number) {
        console.log(`${this.name} everyday study in ${nameOfhour} hour`)
    }
}

class Teacher1 extends Person1 {
    takeClass(nameOfhour: number) {
        console.log(`${this.name} everyday take class in ${nameOfhour} hour`)
    }
}

const Istudent = new Student1("Niloy");
const Iteacher = new Teacher1("Nandon");

const getUserInfo = (user: Person1) => {
    if (user instanceof Student1) {
        user.doStudy(10);
    }
    else if (user instanceof Teacher1) {
        user.takeClass(5);
    }
}

getUserInfo(Istudent)