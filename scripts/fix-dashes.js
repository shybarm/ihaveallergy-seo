const fs = require('fs');
const path = require('path');

function walk(dir) {
  const results = [];
  try {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (item === 'node_modules' || item === '.next' || item === 'scripts') continue;
      if (fs.statSync(full).isDirectory()) results.push(...walk(full));
      else if (item.endsWith('.tsx')) results.push(full);
    }
  } catch(e) {}
  return results;
}

let totalEm = 0, totalEn = 0, filesChanged = 0;
const files = [...walk('app'), ...walk('components')];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const orig = content;
  const em = (orig.match(/\u2014/g) || []).length;
  const en = (orig.match(/\u2013/g) || []).length;
  // em-dash (U+2014): ' — ' -> ' - ', standalone -> '-'
  content = content.replace(/ \u2014 /g, ' - ');
  content = content.replace(/\u2014/g, '-');
  // en-dash (U+2013): ' – ' -> ' - ', standalone -> '-'
  content = content.replace(/ \u2013 /g, ' - ');
  content = content.replace(/\u2013/g, '-');
  if (content !== orig) {
    totalEm += em; totalEn += en; filesChanged++;
    fs.writeFileSync(file, content, 'utf8');
    console.log(file + ': ' + em + ' em, ' + en + ' en');
  }
}
console.log('DONE: ' + filesChanged + ' files, ' + totalEm + ' em-dashes, ' + totalEn + ' en-dashes replaced');
