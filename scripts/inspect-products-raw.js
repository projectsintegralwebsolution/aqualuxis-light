const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');

// find CATEGORIES
const catMatch = content.match(/export const CATEGORIES: Category\[\] = \[([\s\S]*?)\];/);
if (catMatch) {
  console.log('CATEGORIES found:');
  console.log(catMatch[1]);
}
