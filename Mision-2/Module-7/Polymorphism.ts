
class Person {
    getSleep() {
        console.log("I sleep for 8 hour")
    }
}

class Student extends Person {
    getSleep() {
        console.log("I sleep for 10 hour")
    }
}
class Teacher extends Person {
    getSleep() {
        console.log("I sleep for 12 hour")
    }
}


const User =(params:Person)=>{
    params.getSleep();
}

const user1=new Person();
const user2=new Student();
const user3=new Teacher();
User(user1);
User(user2);
User(user3);



// class Shape{
//     getArea(){
//         return 0;
//     }
// }

// class Circle extends Shape{
//     getArea(){

//     }
// }

