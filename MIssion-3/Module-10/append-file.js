const fs=require('fs');

fs.writeFileSync('./output/app.log','application started \n');
console.log("file created successtully");

const logEntry=`${new Date() .toISOString()}user logged in \n`;
fs.appendFileSync('./output/app.log',logEntry,(err)=>{
    if(err){
        console.log(err.message);
    }
    else 
    {
        console.log("File append sunccessfully");
    }
})



const logEntry2 = `${new Date().toISOString()} date fetched \n`;

fs.appendFile('./output/app.log', logEntry2, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("New time appended successfully");
    }
});
