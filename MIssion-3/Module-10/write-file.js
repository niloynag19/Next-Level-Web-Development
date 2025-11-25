const fs=require('fs');

const content1="This is the first line.\n Node.js is awesome!";

try{
    fs.writeFileSync('./output/test-sync.txt',content1);
    console.log("File written successfully.");
}catch(err){
    console.error(err.message);
}

// const content2="This is a content \nAppending this line to the file.";
// fs.watchFile('./output/test-sync.txt',content2,(err)=>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log("File appended successfully.");
// });


const content2 = "This is a content \nAppending this line to the file.";

fs.writeFile('./output/test-sync.txt', content2, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    else {
        console.log("file written asunchronously")
    }
});


const content3="my name is niloy \n i love programming";
fs.appendFile('./output/test-sync.txt',content3,(err)=>{
    if(err){
        console.log(err.message);
    }
    else 
    {
        console.log("file append successfully");
    }
})
