const fs=require('fs'); 
fs.writeFileSync('./output/temp.txt','temporary file created \n');
console.log("temporary file created successfully");

if(fs.existsSync('./output/temp.txt')){
    console.log("file exists, deleting now...");
    fs.unlinkSync('./output/temp.txt');
    console.log("file deleted successfully");
}
try{
    fs.unlinkSync('./output/temp.txt');
}catch(err){
    console.error(err.message);
}

fs.writeFile('./output/temp2.txt',"new file ",(error)=>{
    if(error)
    {
        console.log(error.message);
    }
    console.log("another temp file ");
    fs.unlink('./output/temp2.txt',(err)=>{
        if(err)
        {
            console.log(err.message);
        }
    });
    console.log("temp2 delete successfully")
})