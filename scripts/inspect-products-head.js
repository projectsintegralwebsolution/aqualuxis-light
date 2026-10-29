const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');
const lines = content.split('\n');
lines.slice(0, 50).forEach((l, i) => console.log(`${i+1}: ${l}`));
