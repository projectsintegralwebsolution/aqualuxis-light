const fs = require('fs');

const { PRODUCTS, CATEGORIES } = require('./src/data/products.ts');

console.log('Categories count:', CATEGORIES.length);
CATEGORIES.forEach(c => {
  console.log(`- ${c.id}: ${c.name} (${c.slug})`);
});

console.log('\nSample products count:', PRODUCTS.length);
PRODUCTS.slice(0, 10).forEach(p => {
  console.log(`- ${p.code}: ${p.name} [${p.category}] -> ${p.image}`);
});
