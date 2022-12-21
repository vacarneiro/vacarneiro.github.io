// ========== Populates pages-locais with info from JSON ==========

import data from './pages-locais/locais.json' assert { type: 'JSON' };

let obj = JSON.parse(text);

let json_localName = obj.name;

let localName = document.getElementById("local-name");


function populateLocals(obj) {
   return obj;
} 

populateLocals(json_localName);