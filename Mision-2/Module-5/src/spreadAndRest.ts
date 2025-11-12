const friend=["virat","rohit","dhoni"];

const any=["salman","varun","raj"];

friend.push(...any);
console.log(friend);

const user={
    name:"Nioy",
    phone:"0153733949"
}

const other={
    work:"MERN stack develoaper",
    color:"white"
}

const userInfo={...user,...other};
console.log(userInfo);