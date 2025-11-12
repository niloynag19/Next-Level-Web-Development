const maride=(age:number)=>{
    return age>=21?"You are aceepted":"You are not accepted"
}

console.log(maride(45))

const isAny=null;

const resultWithTernary=isAny?isAny:'You are guest';

const resultWithNulish=isAny??"you are guest";
console.log({resultWithNulish},{resultWithTernary});