
type AlphaNumaric = number | string


const add = (num1: AlphaNumaric, num2: AlphaNumaric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num1;
    }
    else {
        num1.toString() + num2.toString();
    }
}

type NormalUser={
    name:string
}

type AdminUser={
    name:string,
    role:"Admin"
}

type User=NormalUser|AdminUser

const getUser=(user:User)=>{
    if("role"in user)
    {
        console.log(`This ${user.name} and his role if ${user.role}`);
    }
    else 
    {
        console.log(user.name)
    }
}


getUser({name:"Niloy",role:"Admin"})

