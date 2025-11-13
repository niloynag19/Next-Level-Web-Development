type generic=Array<unknown>
type genericsArray<T>=Array<T>;


const Ifriends1:genericsArray<string>=['a','b','c'];
const Ifriends2:Array<string>=['a','b','c','d'];
const Ifriends3:generic=['a','b','c','d'];

const rollNumber:genericsArray<number>=[1,2,3,4,5,6];
const rollNumber2:Array<number>=[1,2,3,4,5,6];
const rollNumber3:generic=[1,2,3,4,5,6];

const isBoolean:genericsArray<boolean>=[true,false,true,false]
const isBoolean2:Array<boolean>=[true,false,true,false]
const isBoolean3:generic=[true,false,true,false]


console.log(Ifriends1)
// console.log(Ifriends2)

type Coorditas<x,y>=[x,y];

const coorditas1:Coorditas<number,number>=[1,2]
const coorditas2:Coorditas<string,string>=['a','b']


const userList:genericsArray<{name:string,age:number}>=[
    {
        name:"niloy",
        age:21,
    },
    {
        name:"white",
        age:39,
    }
]