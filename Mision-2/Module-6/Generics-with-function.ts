

const createArrayWithString=(value:string)=>[value];

const createArrayWithNumber=(value:number)=>[value];

const createArrayWithObject=(value:{
    id:number,name:string})=>{
        return [value]
    }

const createArrayWithGeneric=<T>(value:T)=>{
    return [value];
}
const arrString = createArrayWithGeneric("apple");
const arrNumber= createArrayWithGeneric(1234);
const arrObject=createArrayWithGeneric({
    id:123,
    name:"Niloy"
});



const addStudentToCourse=<T>(studentInfo:T)=>{
    return {
        course:"Next Level",
        ...studentInfo,
    }
}

const student1={
    id:123,
    name:"Niloy",
    hasPen:true,
    address:"Barishal"
}

const student2={
    id:234,
    name:"Nandon",
    hasNootbook:true,
}

console.log(addStudentToCourse(student1))
console.log(addStudentToCourse(student2))
