const fs = require('fs');

const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
const lines = header.split('\n');
console.log(lines.slice(55, 345).join('\n'));
