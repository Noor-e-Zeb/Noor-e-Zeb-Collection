const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
if (!fs.existsSync(imgDir)) {
    console.log("Images directory not found!");
    process.exit(1);
}

// Read all files from images folder
const files = fs.readdirSync(imgDir).filter(f => f.match(/\.(png|jpg|jpeg|webp)$/i));

const earrings = files.filter(f => f.toLowerCase().includes('copilot') || f.toLowerCase().includes('air'));
const necklaces = files.filter(f => !earrings.includes(f));

let htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Fix Branding Text
html = html.replace(/Russia/gi, "Royal Imported Collection");
html = html.replace(/Russian/gi, "Royal");

// Find grid container or product section to rebuild dynamically
console.log(`Found ${earrings.length} earrings and ${necklaces.length} necklaces/sets.`);
console.log("Re-building product grid with exact pricing rules...");

// We will write a lightweight logic to clean image paths based on folder
// Let's create a dynamic replacement or clean backup
