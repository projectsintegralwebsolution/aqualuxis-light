const fs = require('fs');

const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
const lines = header.split('\n');
console.log('Lines 350 to 540:');
console.log(lines.slice(350, 540).join('\n'));
