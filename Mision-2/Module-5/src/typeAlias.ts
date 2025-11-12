type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    }
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string;
        city: string;
    }
}
const user1= {
    id: 123,
    name: {
        firstName: 'Niloy',
        lastName: 'Nag',
    },
    gender: 'male',
    contactNo: "014723728",
    address: {
        division: "Barishal",
        city: "Barishal",
    }

}
const user2= {
    id: 12343,
    name: {
        firstName: 'Nandon',
        lastName: 'Nag',
    },
    gender: 'male',
    contactNo: "0192487234",
    address: {
        division: "Dhaka",
        city: "Dhaka",
    }

}
console.log(user2);


type IsAdmin=true
const isAdmin:IsAdmin=true;


type AddFunc=(num1:number,num2:number)=>number;

const add:AddFunc=(num1,num2)=>num1+num2;