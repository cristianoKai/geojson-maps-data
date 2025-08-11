// index.js
const path = require('path');
const fs = require('fs');

function loadJSON(file) {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, 'maps', file), 'utf-8')
  );
}

module.exports = {
  get: (name) => loadJSON(`${name}.json`)
};