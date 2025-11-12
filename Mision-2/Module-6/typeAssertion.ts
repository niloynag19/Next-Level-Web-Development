let anyting:any;
anyting="Mezba";


const kgToConvertor=(input:unknown)=>{
    if(typeof input === "number")
    {
        return input *1000;
    }
    else if(typeof input === "string")
    {
        const [value]=input.split(" ")
        return `${Number(value)*1000}`;

    }
}

console.log(kgToConvertor("2 kg"));


type CustomerError={
    message:string;
}


try{
}catch(err){
    console.log((err as CustomerError).message);
}