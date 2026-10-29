const fs = require('fs');

const header = fs.readFileSync('src/components/Header.tsx', 'utf8');
const lines = header.split('\n');

const cats = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("id: '") && lines[i-1] && lines[i-1].includes('{')) {
    cats.push({
      line: i+1,
      id: lines[i].trim(),
      tabLabel: lines[i+1] ? lines[i+1].trim() : '',
      icon: lines[i+3] ? lines[i+3].trim() : ''
    });
  }
}
console.log('Categories found in Header.tsx:', cats);
