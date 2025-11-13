type value = {
    id: number,
    name: string
}

const addStudentToCourse1 = <T extends value>(
    studentInfo: T) => {
    return {
        cousse: "Next Level",
        ...studentInfo
    }
}

const user1 = {
    id: 123,
    name: "Niloy",
    address: "Dhaka"
}

const user2 = {
    id: 123,
    roll: 32,
    name: "Nandon"
}

console.log(addStudentToCourse1(user1));
console.log(addStudentToCourse1(user2));