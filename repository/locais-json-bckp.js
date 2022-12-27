// ========== Populates pages-locais with info from JSON ==========

// Pulls JSON file from Github and assigns it to variable "jsonLocal"
async function fetchLocalJSON() {

    const requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonLocal = await response.json();

    console.log(jsonLocal);

    // populateLocal(jsonLocal);

}

fetchLocalJSON();

// Gets id from html elements and changes content according to JSON
// function populateLocal(obj) {

//     // const localName = document.getElementById('local-name');
//     // const localSuserano = document.getElementById('local-suserano');
//     // const localMeirinho = document.getElementById('local-meirinho');
//     // const localRegiao = document.getElementById('local-regiao');

//     // localName.textContent = obj.locals[1].name;
//     // localSuserano.textContent = obj.locals[1].suserano;
//     // localMeirinho.textContent = obj.locals[1].meirinho;
//     // localRegiao.textContent = obj.locals[1].regiao;

// }



// Finds the HTML file name
// let path = window.location.pathname;
// let page = path.split("/").pop();
// let pageNoType = page.substring(0, page.length - 5);
// console.log(pageNoType);

