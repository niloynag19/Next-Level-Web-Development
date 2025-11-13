type User = {
    name: string,
    age: number,
}
type Role = {
    role: "admin" | "user"
}

type UserWithRole = Role & User;


// interface only works in object type data
// interface

interface IUser{
    name:string,
    age:number
}

interface IUserRole extends IUser{
    role:"admin"|"user"
}

const any1:IUserRole={
    name:"virat",
    age:21,
    role:"admin"
}


interface User4 {
    name: string,
    age: number
}


const User3: UserWithRole = {
    name: "Niloy",
    age: 21,
    role: "admin",
}

const User1: User = {
    name: "Niloy",
    age: 21,
}

const User2: User = {
    name: "Nandon",
    age: 20,
}


type Add=(num1:number,num2:number)=>number

const add:Add=(num1,num2)=>num1+num2;


type Friends=string[];

const friends:Friends=['A','B','C'];

interface IFriends{
    [index:number]:string
}