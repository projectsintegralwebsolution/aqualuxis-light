const fs = require('fs');

const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
const lines = header.split('\n');

console.log('=== MEGA MENU JSX (lines 700 to 820) ===');
console.log(lines.slice(700, 820).join('\n'));
