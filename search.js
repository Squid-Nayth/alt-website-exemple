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
  for (const file of results) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      if (content.includes('solutions concrètes')) {
        console.log(`FOUND IN: ${file}`);
      }
      if (content.includes('Contact') && content.includes('ArrowRight') && file.includes('Navbar')) {
        // Just checking Navbar button
      }
    } catch(e) {}
  }
});
