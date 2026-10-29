const fs = require('fs');

const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
const lines = header.split('\n');

console.log('=== DATA DEFINITION (lines 50 to 180) ===');
console.log(lines.slice(50, 180).join('\n'));

console.log('=== MEGA MENU JSX (lines 535 to 700) ===');
console.log(lines.slice(535, 700).join('\n'));
