// ========== Populates pages-locais with info from JSON ==========

let key = "name";
let noteworthyPeople = document.getElementById('noteworthy-people');

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
    let requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
    let request = new Request(requestURL);
    let response = await fetch(request);
    let content = await response.json();

    // Turns into variables ids from elements which will be replaced by JSON content
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

    let localContinente = document.getElementById('continente');
    let localReino = document.getElementById('reino');
    let localCondado = document.getElementById('condado');

    // Fills page content 
    for (let i = 0; i < Object.keys(content.locals).length; i++) {

        let currentLocal = content.locals[i][key];
        let residents = content.locals[i].residentesDestaque;

        if (currentLocal == pageNameUpper || currentLocal == pageName) {

            // Changes page's title tag
            document.title = pageName;

            // Changes fields content with JSON info
            localName.textContent = content.locals[i].name;

            // Breadcrumbs under local title
            localContinente.innerHTML = content.locals[i].continente;
            localReino.innerHTML = content.locals[i].reino;
            localCondado.innerHTML = content.locals[i].condado;

            // Defines link to continent bread crumb
            if (content.locals[i].continente == 'Hârn') {
                localContinente.href = "../continentes/harn.html";
            }
            else {
                if (content.locals[i].continente == 'Lythia') {
                    localContinente.href = "../continentes/lythia.html";
                }
            }

            // Defines link to kingdom bread crumb
            if (content.locals[i].reino == 'Reino Brumado') {
                localReino.href = "../reinos/reino-brumado.html";
            }
            else {
                if (content.locals[i].reino == 'Reino das Estepes') {
                    localReino.href = "../reinos/reino-das-estepes.html";
                }
            }

            // Defines link to county bread crumb
            if (content.locals[i].condado == 'Condado Angra') {
                localCondado.href = "../condados/angra.html";
            }
            else {
                if (content.locals[i].condado == 'Condado Novo') {
                    localCondado.href = "../condados/novo.html";
                }
                if (content.locals[i].condado == 'Condado Talude') {
                    localCondado.href = "../condados/talude.html";
                }
                if (content.locals[i].condado == 'Condado Videira') {
                    localCondado.href = "../condados/videira.html";
                }
            }

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

            // Fills noteworthy residents
            for (let x = 0; x < residents.length; x++) {

                // People's thumbnails structure
                let cardTemplate = '<a href="${window.location.origin}/pages-pessoas/${personClass}/${personAddress}.html" class="a-link">' +
                    '<div class="card-link">' +
                    '<p class="person-name">${personName}</p>' +
                    '<p class="secondary-info">${personJob}</p>' +
                    '</div>' +
                    '</a>';

                // People's thumbnails info to be inserted inside cardTemplate
                let peopleCards = {

                    jogadorLugo: cardTemplate.replace('${personClass}', 'jogador')
                        .replace('${personAddress}', 'lugo')
                        .replace('${personName}', 'Lugo')
                        .replace('${personJob}', 'Ferreiro'),

                    jogadorOlivia: cardTemplate.replace('${personClass}', 'jogador')
                        .replace('${personAddress}', 'olivia')
                        .replace('${personName}', 'Olívia')
                        .replace('${personJob}', 'Apotecária'),

                    nobrezaMenorEdric: cardTemplate.replace('${personClass}', 'nobrezaMenor')
                        .replace('${personAddress}', ' edric')
                        .replace('${personName}', '† Edric')
                        .replace('${personJob}', 'Lorde'),

                    plebeFrederico: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', ' frederico')
                        .replace('${personName}', '† Frederico')
                        .replace('${personJob}', 'Guarda'),

                    nobrezaMaiorAgnes: cardTemplate.replace('${personClass}', 'nobrezaMaior')
                        .replace('${personAddress}', 'agnes')
                        .replace('${personName}', 'Agnes')
                        .replace('${personJob}', 'Condessa'),

                    cleroArtur: cardTemplate.replace('${personClass}', 'clero')
                        .replace('${personAddress}', 'artur')
                        .replace('${personName}', 'Artur')
                        .replace('${personJob}', 'Vice-prior'),

                    cleroBernardo: cardTemplate.replace('${personClass}', 'clero')
                        .replace('${personAddress}', 'bernardo')
                        .replace('${personName}', 'Bernardo')
                        .replace('${personJob}', 'Prior'),

                    plebeCatarina: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'catarina')
                        .replace('${personName}', 'Catarina')
                        .replace('${personJob}', 'Apotecária'),

                    plebeDiana: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'diana')
                        .replace('${personName}', 'Diana')
                        .replace('${personJob}', 'Estalajadeira'),

                    nobrezaMenorErasmo: cardTemplate.replace('${personClass}', 'nobrezaMenor')
                        .replace('${personAddress}', 'erasmo')
                        .replace('${personName}', 'Erasmo')
                        .replace('${personJob}', 'Lorde'),

                    Estevão: cardTemplate.replace('${personClass}', '')
                        .replace('${personAddress}', 'estevão')
                        .replace('${personName}', 'Estevão')
                        .replace('${personJob}', '?'),

                    plebeFernando: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'fernando')
                        .replace('${personName}', 'Fernando')
                        .replace('${personJob}', 'Agricultor'),

                    nobrezaMaiorFernão: cardTemplate.replace('${personClass}', 'nobrezaMaior')
                        .replace('${personAddress}', 'fernão')
                        .replace('${personName}', 'Fernão')
                        .replace('${personJob}', 'Conde'),

                    plebeFrancisca: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'francisca')
                        .replace('${personName}', 'Francisca')
                        .replace('${personJob}', 'Agricultura'),

                    plebeGaspar: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'gaspar')
                        .replace('${personName}', 'Gaspar')
                        .replace('${personJob}', 'Agricultor'),

                    nobrezaMaiorGuilherme: cardTemplate.replace('${personClass}', 'nobrezaMaior')
                        .replace('${personAddress}', 'guilherme')
                        .replace('${personName}', 'Guilherme')
                        .replace('${personJob}', 'Rei'),

                    plebeHeitor: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'heitor')
                        .replace('${personName}', 'Heitor')
                        .replace('${personJob}', 'Agricultor'),

                    plebeIsabel: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'isabel')
                        .replace('${personName}', 'Isabel')
                        .replace('${personJob}', 'Agricutora'),

                    plebeIseu: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'iseu')
                        .replace('${personName}', 'Iseu')
                        .replace('${personJob}', 'Meirinho'),

                    cleroJoão: cardTemplate.replace('${personClass}', 'clero')
                        .replace('${personAddress}', 'joão')
                        .replace('${personName}', 'João')
                        .replace('${personJob}', 'Monge'),

                    plebeJonas: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'jonas')
                        .replace('${personName}', 'Jonas')
                        .replace('${personJob}', 'Soldado'),

                    plebeJose: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'josé')
                        .replace('${personName}', 'José')
                        .replace('${personJob}', 'Agricultor'),

                    plebeLucia: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'lúcia')
                        .replace('${personName}', 'Lúcia')
                        .replace('${personJob}', 'Agricultora'),

                    plebeMaria: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'maria')
                        .replace('${personName}', 'Maria')
                        .replace('${personJob}', 'Estalajadeira'),

                    plebeMatias: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'matias')
                        .replace('${personName}', 'Matias')
                        .replace('${personJob}', 'Agricultor'),

                    plebeOfir: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'ofir')
                        .replace('${personName}', 'Ofir')
                        .replace('${personJob}', 'Canteiro'),

                    plebeOrlando: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'orlando')
                        .replace('${personName}', 'Orlando')
                        .replace('${personJob}', 'Açougueiro'),

                    plebeRoberta: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'roberta')
                        .replace('${personName}', 'Roberta')
                        .replace('${personJob}', 'Agricultora'),

                    plebeRodolfo: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'rodolfo')
                        .replace('${personName}', 'Rodolfo')
                        .replace('${personJob}', 'Deputado'),

                    plebeRomao: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'romão')
                        .replace('${personName}', 'Romão')
                        .replace('${personJob}', 'Guarda'),

                    plebeSimao: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'simão')
                        .replace('${personName}', 'Simão')
                        .replace('${personJob}', 'Xerife'),

                    plebeTeodora: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'teodora')
                        .replace('${personName}', 'Teodora')
                        .replace('${personJob}', 'Curtidora'),

                    plebeValerio: cardTemplate.replace('${personClass}', 'plebe')
                        .replace('${personAddress}', 'valério')
                        .replace('${personName}', 'Valério')
                        .replace('${personJob}', 'Guarda')
                };

                let residentsValues = Object.values(residents);
                let peopleCardsKeys = Object.keys(peopleCards);

                // Goes through matches between JSON residentesDestaque values nad peopleCards keys
                for (let z = 0; z < residentsValues.length; z++) {

                    let peopleFound = residentsValues[z];
                    let peopleCardsKeysFound = peopleCards[peopleFound];

                    // if (peopleCardsKeys && !noteworthyPeople.innerHTML.includes(peopleCardsKeysFound)) {
                    if (peopleCardsKeys && !noteworthyPeople.innerHTML.includes(peopleCardsKeysFound) && peopleCardsKeysFound != undefined) {
                        noteworthyPeople.innerHTML += peopleCardsKeysFound;
                    }
                }
            }
        }
    }
}

replaceWithJSON();