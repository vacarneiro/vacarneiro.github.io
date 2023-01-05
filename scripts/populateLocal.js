// ========== Populates pages-locais with info from JSON ==========

var key = "name";

let peopleCards = {
    jogadorLugo: '<a href="pages-pessoas/jogadores/lugo.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/lugo-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">Lugo</p>' +
        '<p class="secondary-info">Ferreiro</p>' +
        '</div>' +
        '</a>',
    jogadoraOlivia: '<a href="pages-pessoas/jogadores/olivia.html" class="a-link">' +
        '<div class="card-link">' +
        '<img src="/images/pages-pessoas/jogadores/olivia-thumb.png" class="card-picture" alt="">' +
        '<p class="person-name">Olívia</p>' +
        '<p class="secondary-info">Apotecária</p>' +
        '</div>' +
        '</a>'
};

// Finds the HTML file name, crops after / and removes last 5 characters
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

        if (content.locals[i][key] == pageNameUpper) {

            localName.textContent = content.locals[i].name;
            localSuserano.textContent = content.locals[i].suserano;
            localMeirinho.textContent = content.locals[i].meirinho;
            localEconomia.textContent = content.locals[i].economia;
            localRegiao.textContent = content.locals[i].regiao;
            localArea.textContent = content.locals[i].area;
            localConstrucoes1.textContent = content.locals[i].construcoes[0];
            localConstrucoes2.textContent = content.locals[i].construcoes[1];
            localConstrucoes3.textContent = content.locals[i].construcoes[2];
            localNotas1.textContent = content.locals[i].notas[0];
            localNotas2.textContent = content.locals[i].notas[1];
            localNotas3.textContent = content.locals[i].notas[2];

            let person1 = content.locals[i].residentesDestaque[0];
            console.log(person1);

            return;

        } else {

            console.log("Nothing found!");

        }

 

      

    }
}




// Players thumbnails
let jogadorLugo = '<a href="pages-pessoas/jogadores/lugo.html" class="a-link">' +
    '<div class="card-link">' +
    '<img src="/images/pages-pessoas/jogadores/lugo-thumb.png" class="card-picture" alt="">' +
    '<p class="person-name">Lugo</p>' +
    '<p class="secondary-info">Ferreiro</p>' +
    '</div>' +
    '</a>';

let jogadoraOlivia = '<a href="pages-pessoas/jogadores/olivia.html" class="a-link">' +
    '<div class="card-link">' +
    '<img src="/images/pages-pessoas/jogadores/olivia-thumb.png" class="card-picture" alt="">' +
    '<p class="person-name">Olívia</p>' +
    '<p class="secondary-info">Apotecária</p>' +
    '</div>' +
    '</a>';

// Low nobility thumbnails
let lordeErasmo = '<a href="pages-pessoas/nobreza-menor/erasmo.html" class="a-link">' +
    '<div class="card-link">' +
    '<img src="/images/pages-pessoas/nobreza-menor/erasmo-thumb.png" class="card-picture" alt="">' +
    '<p class="person-name">Erasmo</p>' +
    '<p class="secondary-info">Lorde</p>' +
    '</div>' +
    '</a>';


// High nobility thumbnails
let reiEstevao = '<a href="pages-pessoas/nobreza-maior/estevao.html" class="a-link">' +
    '<div class="card-link">' +
    '<img src="/images/pages-pessoas/nobreza-maior/estevao-thumb.png" class="card-picture" alt="">' +
    '<p class="person-name">Estevão</p>' +
    '<p class="secondary-info">Rei</p>' +
    '</div>' +
    '</a>';

let rainhaLoreta = '<a href="pages-pessoas/nobreza-maior/loreta.html" class="a-link">' +
    '<div class="card-link">' +
    '<img src="/images/pages-pessoas/nobreza-maior/loreta-thumb.png" class="card-picture" alt="">' +
    '<p class="person-name">Loreta</p>' +
    '<p class="secondary-info">Rainha</p>' +
    '</div>' +
    '</a>';

let condeFernao = '<a href="pages-pessoas/nobreza-maior/fernao.html" class="a-link">' +
    '<div class="card-link">' +
    '<img src="/images/pages-pessoas/nobreza-maior/fernao-thumb.png" class="card-picture" alt="">' +
    '<p class="person-name">Fernão</p>' +
    '<p class="secondary-info">Conde</p>' +
    '</div>' +
    '</a>';

let noteworthyPeople = document.getElementById('noteworthy-people');

let people = [
    'jogador-lugo',
    'jogadora-olivia',
    'conde-fernao',
    'rei-estevao',
    'rainha-loreta'
]


// function addPeople() {
//     if (residentesDestaque = 'jogador-lugo') |
//     noteworthyPeople.innerHTML += jogadorLugo;
//     noteworthyPeople.innerHTML += jogadoraOlivia;
// };

