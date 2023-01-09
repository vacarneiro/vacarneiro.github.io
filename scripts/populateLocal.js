// ========== Populates pages-locais with info from JSON ==========

// Object with people's thumbnails
let peopleCards = {
    jogadorLugo: '<a href="pages-pessoas/jogadores/lugo.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/lugo-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">Lugo</p>' +
        '<p class="secondary-info">Ferreiro</p>' +
        '</div>' +
        '</a>',
    jogadorOlivia: '<a href="pages-pessoas/jogadores/olivia.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/olivia-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">Olívia</p>' +
        '<p class="secondary-info">Apotecária</p>' +
        '</div>' +
        '</a>',
    plebeJose: '<a href="pages-pessoas/jogadores/olivia.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/olivia-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">Jose</p>' +
        '<p class="secondary-info">Bêbado</p>' +
        '</div>' +
        '</a>',
    plebeJoao: '<a href="pages-pessoas/jogadores/olivia.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/olivia-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">João</p>' +
        '<p class="secondary-info">Agricultor</p>' +
        '</div>' +
        '</a>',
    nobrezaMenorErasmo: '<a href="pages-pessoas/jogadores/olivia.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/olivia-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">Erasmo</p>' +
        '<p class="secondary-info">Lorde</p>' +
        '</div>' +
        '</a>'
};

var key = "name";
let noteworthyPeople = document.getElementById('noteworthy-people');

// Finds the HTML file name, crops after "/".removes last 5 characters and makes first letter uppercase
let path = window.location.pathname;
let page = path.split("/").pop();
let pageName = page.substring(0, page.length - 5);
let pageNameUpper = pageName.charAt(0).toUpperCase() + pageName.slice(1);

async function replaceWithJSON() {

    // Pulls JSON file from Github and assigns it to variable "content"
    let requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
    let request = new Request(requestURL);
    let response = await fetch(request);
    let content = await response.json();

    //Gets all ids from replaceable elements
    let localName = document.getElementById('local-nome');
    let localSuserano = document.getElementById('local-suserano');
    let localMeirinho = document.getElementById('local-meirinho');
    let localEconomia = document.getElementById('local-economia');
    let localRegiao = document.getElementById('local-regiao');
    let localArea = document.getElementById('local-area');
    let localConstrucoes1 = document.getElementById('local-construcoes-1');
    let localConstrucoes2 = document.getElementById('local-construcoes-2');
    let localConstrucoes3 = document.getElementById('local-construcoes-3');
    let localNotas1 = document.getElementById('local-notas-1');
    let localNotas2 = document.getElementById('local-notas-2');
    let localNotas3 = document.getElementById('local-notas-3');

    for (var i = 0; i < Object.keys(content.locals).length; i++) {

        let currentLocal = content.locals[i][key];

        if (currentLocal == pageNameUpper) {

            // Changes page's title tag
            document.title = pageNameUpper;

            // Changes all fields content with JSON info
            localName.textContent = content.locals[i].name;
            localSuserano.textContent = content.locals[i].suserano;
            localMeirinho.textContent = content.locals[i].meirinho;
            localEconomia.textContent = content.locals[i].economia;
            localRegiao.textContent = content.locals[i].regiao;
            localArea.textContent = content.locals[i].area;
            localConstrucoes1.textContent = content.locals[i].construcoes[0];
            localConstrucoes2.textContent = content.locals[i].construcoes[1];
            localConstrucoes3.textContent = content.locals[i].construcoes[2];
            // localNotas1.textContent = content.locals[i].notas[0];
            // localNotas2.textContent = content.locals[i].notas[1];
            // localNotas3.textContent = content.locals[i].notas[2];

            // Tried to check if notas is empty
            // if (content.locals[i].notas[i] != null) {
            //     localNotas1.textContent = content.locals[i].notas[i];
                
            // } else {
            //     console.log("empty note");
            // }
           

            // Trying to iterate through residentesDestaque and add corresponding card
            // for (var i = 0; i < Object.keys(content.locals).length; i++) {

            //     if (currentLocal.residentesDestaque !== null) {

            //         let person = currentLocal.residentesDestaque;
            //         console.log(person);
            //         let personObject = peopleCards[person];

            //         noteworthyPeople.innerHTML += personObject;
            //         console.log("Person added!");

            //     } else {
            //         console.log("No person to add");
            //     }
            // }

            // Tried to iterate through residenteDestaque using forEach instead of for
            // let currentLocalPeople = currentLocal.residentesDestaque;

            // currentLocalPeople.forEach((character) => {
            //     console.log(character);
            // });

            // Assigns to variables name of people in JSON 
            let person1 = content.locals[i].residentesDestaque[0];
            let person2 = content.locals[i].residentesDestaque[1];
            let person3 = content.locals[i].residentesDestaque[2];
            let person4 = content.locals[i].residentesDestaque[3];
            let person5 = content.locals[i].residentesDestaque[4];

            // Finds in people's object the resident in JSON
            let personObject1 = peopleCards[person1];
            let personObject2 = peopleCards[person2];
            let personObject3 = peopleCards[person3];
            let personObject4 = peopleCards[person4];
            let personObject5 = peopleCards[person5];

            //Adds people cards in #noteworthyPeople through the HTML inside object
            noteworthyPeople.innerHTML += personObject1;
            noteworthyPeople.innerHTML += personObject2;
            noteworthyPeople.innerHTML += personObject3;
            noteworthyPeople.innerHTML += personObject4;
            noteworthyPeople.innerHTML += personObject5;
            

            return;

        } else {

            console.log("Iteration through JSON ended");

        }
    }
}

replaceWithJSON();