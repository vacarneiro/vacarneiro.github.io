// ========== Populates pages-locais with info from JSON ==========

var results = [];
var key = "name";
let test;

// Finds the HTML file name, crops after / and removes last 5 characters
let path = window.location.pathname;
let page = path.split("/").pop();
let pageName = page.substring(0, page.length - 5);


// Pulls JSON file from Github and assigns it to variable "content"
async function fetchLocalJSON() {

    let requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
    let request = new Request(requestURL);
    let response = await fetch(request);
    let content = await response.json();

    let localName = document.getElementById('local-nome');

    console.log(Object.keys(content.locals).length);
    console.log(pageName); 
    pageName = "Monforte";
  
    for (var i = 0; i < Object.keys(content.locals).length; i++) {
        if (content.locals[i][key] == pageName) {
            localName.textContent = content.locals[i].name;
        } else {
            console.log("Nothing found!");
        }
    }
}

fetchLocalJSON();


