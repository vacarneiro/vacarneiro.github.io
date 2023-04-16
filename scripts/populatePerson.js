// ========== Populates pages-pessoas with info from JSON ==========

// let key = "name";
// let noteworthyPeople = document.getElementById('noteworthy-people');

// Finds the HTML file name  
let path = window.location.pathname;
// Crops after "/"
let page = path.split("/").pop();
// Removes last 5 characters
let pageName = page.substring(0, page.length - 5);
// Makes first letter uppercase
let pageNameUpper = pageName.charAt(0).toUpperCase() + pageName.slice(1);

// Splits the page name into two words using the hyphen as the delimiter
let words = pageName.split('-');

// Checks if there are two words
if (words.length === 2) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    // capitalize the first letter of the second word
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    // join the words back together without the hyphen
    pageName = words.join(' ');
}
else {
    pageName = pageNameUpper;
}


async function replaceWithJSON() {

    // Pulls JSON file from Github and assigns it to variable "content"
    let requestURL = 'https://vacarneiro.github.io/pages-pessoas/people.json';
    let request = new Request(requestURL);
    let response = await fetch(request);
    let content = await response.json();

    // Turns into variables ids from elements which will be replaced by JSON content
    let personAge = document.getElementById('person-age');
    let personSkin = document.getElementById('person-skin');
    let personEyes = document.getElementById('person-eyes');
    let personHair = document.getElementById('person-hair');
    let personHeight = document.getElementById('person-height');
    let personWeight = document.getElementById('person-weight');
    let personOther = document.getElementById('person-other');
    let personPersonality1 = document.getElementById('person-personality1');
    let personPersonality2 = document.getElementById('person-personality2');
    let personPersonality3 = document.getElementById('person-personality3');
    let personHistory1 = document.getElementById('person-history1');
    let personHistory2 = document.getElementById('person-history2');
    let personHistory3 = document.getElementById('person-history3');
    let personInteraction1 = document.getElementById('person-interaction1');
    let personInteraction2 = document.getElementById('person-interaction2');
    let personInteraction3 = document.getElementById('person-interaction3');
    let personHead = document.getElementById('person-head');
    let personTorso = document.getElementById('person-torso');
    let personLegs = document.getElementById('person-legs');
    let personFeet = document.getElementById('person-feet');
    let personClothingOther = document.getElementById('person-clothing-other');
    let personItem1 = document.getElementById('person-item1');
    let personItem2 = document.getElementById('person-item2');
    let personItem3 = document.getElementById('person-item3');

    let localContinente = document.getElementById('continente');
    let localReino = document.getElementById('reino');
    let localCondado = document.getElementById('condado');

    // Fills page content 
    for (let i = 0; i < Object.keys(content.people).length; i++) {

        let currentPerson = content.people[i][key];

        if (currentPerson == pageNameUpper || currentPerson == pageName) {

            // Changes page's title tag
            document.title = pageName;

            // Changes fields content with JSON info
            localName.textContent = content.locals[i].name;

            // Breadcrumbs under local title
            // localContinente.innerHTML = content.locals[i].continente;
            // localReino.innerHTML = content.locals[i].reino;
            // localCondado.innerHTML = content.locals[i].condado;

            // Defines link to continent bread crumb
            // if (content.locals[i].continente == 'Hârn') {
            //     localContinente.href = "../continentes/harn.html";
            // }
            // else {
            //     if (content.locals[i].continente == 'Lythia') {
            //         localContinente.href = "../continentes/lythia.html";
            //     }
            // }

            // Defines link to kingdom bread crumb
            // if (content.locals[i].reino == 'Reino Brumado') {
            //     localReino.href = "../reinos/reino-brumado.html";
            // }
            // else {
            //     if (content.locals[i].reino == 'Reino das Estepes') {
            //         localReino.href = "../reinos/reino-das-estepes.html";
            //     }
            // }

            // Defines link to county bread crumb
            // if (content.locals[i].condado == 'Condado Angra') {
            //     localCondado.href = "../condados/angra.html";
            // }
            // else {
            //     if (content.locals[i].condado == 'Condado Novo') {
            //         localCondado.href = "../condados/novo.html";
            //     }
            //     if (content.locals[i].condado == 'Condado Talude') {
            //         localCondado.href = "../condados/talude.html";
            //     }
            //     if (content.locals[i].condado == 'Condado Videira') {
            //         localCondado.href = "../condados/videira.html";
            //     }
            // }

            // Administration
            localSuserano.textContent = content.locals[i].suserano;
            localMeirinho.textContent = content.locals[i].meirinho;

            // Characteristics
            localEconomia.textContent = content.locals[i].economia;
            localRegiao.textContent = content.locals[i].regiao;
            localArea.textContent = content.locals[i].area;
            localConstrucoes1.textContent = content.locals[i].construcoes[0];
            localConstrucoes2.textContent = content.locals[i].construcoes[1];
            localConstrucoes3.textContent = content.locals[i].construcoes[2];

            // Notes
            localNotas1.textContent = content.locals[i].notas[0];
            localNotas2.textContent = content.locals[i].notas[1];
            localNotas3.textContent = content.locals[i].notas[2];

        }
    }
}

replaceWithJSON();