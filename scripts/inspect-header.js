const fs = require('fs');

const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
console.log('--- Header length:', header.length);
// print lines around products or megamenu
const lines = header.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('Products') || l.includes('mega') || l.includes('dropdown') || l.includes('CATEGORIES')) {
    console.log(`${idx+1}: ${l}`);
  }
});
