const fs = require('fs');

console.log("Starting synchronous file read...");

fs.readFile("./data/entries.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
})