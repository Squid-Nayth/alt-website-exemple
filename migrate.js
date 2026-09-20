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

    // Replace next/link
    content = content.replace(/import\s+(?:{[^}]*}|[\w]+)\s+from\s+['"]next\/link['"];?/g, 'import { Link } from "react-router-dom";');
    content = content.replace(/<Link\s+href=/g, '<Link to=');

    // Replace next/image
    content = content.replace(/import\s+(?:{[^}]*}|[\w]+)\s+from\s+['"]next\/image['"];?/g, '');
    content = content.replace(/<Image/g, '<img');

    // Replace next/navigation
    content = content.replace(/import\s+{[^}]*}\s+from\s+['"]next\/navigation['"];?/g, 'import { useNavigate, useLocation } from "react-router-dom";');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
      console.log(`Updated ${file}`);
    }
  }
  console.log(`Updated ${count} files.`);
});
