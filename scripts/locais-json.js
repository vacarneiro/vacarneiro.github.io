// ========== Populates pages-locais with info from JSON ==========

// Pulls JSON file from Github and assigns it to variable "localInfo"
async function populate() {

    const requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const localInfo = await response.json();

    populateLocal(localInfo);

}

populate();

// Gets id from html elements and changes content according to JSON
function populateLocal(obj) {

    const localName = document.getElementById('local-name');
    const localSuserano = document.getElementById('local-suserano');
    const localMeirinho = document.getElementById('local-meirinho');

    localName.textContent = obj.locals[1].name;
    localSuserano.textContent = obj.locals[1].suserano;
    localMeirinho.textContent = obj.locals[1].meirinho;

}

populateLocal();
