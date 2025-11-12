type UserRole="admin"|"user";

const getDashboard=(role:UserRole)=>{
    if(role==="admin")
    {
        return "Admin Dashboard"
    }
    else if(role==="user")
    {
        return "User Dashboard"
    }
    else 
    {
        return "guest Dashboard"
    }
}
console.log(getDashboard("admin"))

type Employee={
    id:string,
    name:string,
    PhoneNo:string
}

type Manager={
    designation:string,
    teamSize:number,
}

type EmployeeManager=Employee & Manager;

const Niloy:EmployeeManager={
    id:'1',
    name:"Niloy",
    PhoneNo:"028392322",
    designation:"",
    teamSize:10,
}
console.log(Niloy);