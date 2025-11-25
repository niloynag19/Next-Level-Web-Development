const os=require("os");

console.log("System info \n");
console.log("-".repeat(50));

console.log("Platform Details");
console.log("Platform: ", os.platform());
console.log("Architecture: ",os.arch());
console.log("OS type", os.type());
console.log("Os Release: ",os.release());
console.log("Hostname: ",os.hostname());

console.log("\nCPU info :");

const cpus=os.cpus();
console.log("CPU model : ", cpus[0].model);
console.log("Number of core : ",cpus.length);
console.log("CPU speed : ",cpus[0].speed);


const totalMem=os.totalmem();
console.log("Total Memory : ",(totalMem/1024/1024/1024).toFixed(2));