// function

function add(num1:number,num2:number)
{
    return  num1+num2;
}
const sum=(num1:number,num2:number)=>{
    return num1+num2;
}
    


console.log(sum(10,2))

console.log(add(2,3));

const poorUser={
    balance:0,
    add(balance:number):number{
        return this.balance=balance;
    }
}
poorUser.add(1000);
console.log(poorUser.balance);

const arr:number[]=[1,2,3,4];
const any=arr.map((value:number):number=>{
    return value*value;
})

console.log(any);