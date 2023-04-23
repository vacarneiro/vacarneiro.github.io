// ========== Populates pages-pessoas with info from JSON ==========

// Function that replaces special chracters from the JSON
let map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

function replaceCharacters(name) { 
    return name.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) 
};

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
    let personName = document.getElementById('person-name');
    let personOccupation = document.getElementById('person-occupation');
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

    // Fills page content 
    for (let i = 0; i < Object.keys(content.people).length; i++) {

        let key = "nome";
        let currentPerson = content.people[i][key];
        let currentPersonNormalized = replaceCharacters(currentPerson);

        if (currentPersonNormalized === pageNameUpper || currentPersonNormalized === pageName) {

            // Changes page's title tag
            document.title = pageName;

            // Changes fields content with JSON info
            // Header
            personName.textContent = content.people[i].nome;
            personOccupation.textContent = `${content.people[i].ocupacao} de ${content.people[i].local}`;

            // Apperance
            personAge.textContent = content.people[i].idade;
            personSkin.textContent = content.people[i].pele;
            personEyes.textContent = content.people[i].olhos;
            personHair.textContent = content.people[i].cabeloCor;
            personHeight.textContent = content.people[i].altura;
            personWeight.textContent = content.people[i].peso;
            personOther.textContent = content.people[i].outros;

            // Personality
            personPersonality1.textContent = content.people[i].personalidade[0];
            personPersonality2.textContent = content.people[i].personalidade[1];
            personPersonality3.textContent = content.people[i].personalidade[3];

            // History
            personHistory1.textContent = content.people[i].historia[0];
            personHistory2.textContent = content.people[i].historia[1];
            personHistory3.textContent = content.people[i].historia[2];

            // Interactions
            personInteraction1.textContent = content.people[i].interacoes[0];
            personInteraction2.textContent = content.people[i].interacoes[1];
            personInteraction3.textContent = content.people[i].interacoes[2];

            // Clothing
            // personHead.textContent = content.people[i].;
            // personTorso.textContent = content.people[i].;
            // personLegs.textContent = content.people[i].;
            // personFeet.textContent = content.people[i].;
            // personClothingOther.textContent = content.people[i].;

            // Itens
            // personItem1.textContent = content.people[i].;
            // personItem2.textContent = content.people[i].;
            // personItem3.textContent = content.people[i].;
        }
        else {
            // console.log("There's no match");
        }
    }
}

replaceWithJSON();