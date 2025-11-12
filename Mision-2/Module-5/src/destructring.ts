const user={
    name:{
        firstName:"Niloy",
        middleName:"Nag",
        lastName:"Nandon"

    },
    roll:643773,
    favouriteColor:"White",
};

console.log(user.roll);
console.log(user.name.lastName);

const {favouriteColor}=user;
console.log(favouriteColor);

const {name:{middleName}}=user;