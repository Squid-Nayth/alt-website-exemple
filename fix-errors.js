const fs = require('fs');
const path = require('path');

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let i = 0;
    (function next() {
      let file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
          }
          next();
        }
      });
    })();
  });
}

walk(path.join(__dirname, 'src'), function(err, results) {
  if (err) throw err;
  let count = 0;
  for (const file of results) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove `fill`, `unoptimized` from img tags
    content = content.replace(/<img([^>]*)fill(?:={[^}]+}|="[^"]*"|)?([^>]*)>/g, '<img$1$2>');
    content = content.replace(/fill(\s+|>|\/)/g, '$1'); 

    content = content.replace(/<img([^>]*)unoptimized(?:={[^}]+}|="[^"]*"|)?([^>]*)>/g, '<img$1$2>');
    content = content.replace(/unoptimized(\s+|>|\/)/g, '$1'); 

    // Fix `<Link href=` that might have been missed due to whitespace
    content = content.replace(/<Link([^>]+)href=/g, '<Link$1to=');

    // Fix usePathname -> useLocation().pathname in GradientOverlay.tsx and Navbar
    if (content.includes('usePathname')) {
      content = content.replace(/import\s+{[^}]*usePathname[^}]*}\s+from\s+['"]next\/navigation['"];?/g, '');
      content = content.replace(/usePathname\(\)/g, 'useLocation().pathname');
      if (!content.includes('useLocation')) {
         content = 'import { useLocation } from "react-router-dom";\n' + content;
      }
    }

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  }
  console.log(`Updated ${count} files.`);
});
