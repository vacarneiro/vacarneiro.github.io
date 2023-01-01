// ========== Populates pages-locais with info from JSON ==========

// Pulls JSON file from Github and assigns it to variable "jsonLocal"
// async function fetchLocalJSON() {

//     const requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
//     const request = new Request(requestURL);
//     const response = await fetch(request);
//     const jsonLocal = await response.json();

//     const jsonLocalParsed = JSON.parse(jsonLocal);

//     console.log(jsonLocal);  
//     console.log(jsonLocal.locals[1].name);
//     console.log(jsonLocalParsed);

// }

// fetchLocalJSON();


// Finds the HTML file name
// let path = window.location.pathname;
// let page = path.split("/").pop();
// let pageNoType = page.substring(0, page.length - 5);
// console.log("Name of HTML page: " + pageNoType);


// Lists Ids that start with "local"
// let arrayIds = document.querySelectorAll(`[id^="json"]`);
// console.log(arrayIds); 


// Selects JSON object that matches HTML file name
// console.log(jsonLocal);

// Gets id from html elements and changes content according to JSON
// function populateLocal(obj) {
//     // const localName = document.getElementById('local-name');
//     // localName.textContent = obj.locals[1].name;
// }

