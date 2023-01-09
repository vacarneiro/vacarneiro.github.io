function calculateTravel() {

    let origin = document.getElementById("origin");
    let originValue = origin.options[origin.selectedIndex].text;

    let destination = document.getElementById("destination");
    let destinationValue = destination.options[destination.selectedIndex].text;

    let transportation = document.getElementById("transportation");
    let transportationValue = transportation.options[transportation.selectedIndex].text;

    let weather = document.getElementById("weather");
    let weatherValue = weather.options[weather.selectedIndex].text;

    let distance;
    let speed;
    let time;

    let timeDisplay = document.getElementById("travel-time");


    // Would be used as a way to disable destination choice if already picked as origin place
    // let optionMonforte = document.getElementById("option-monforte");
    // let optionFossoBranco = document.getElementById("option-fosso-branco");
    // let optionNogueira = document.getElementById("option-nogueira");

    // NOT WORKING: tried to disabled local destination if it was already selected as origin
    // function disableDestination(samePlace) {

    //     if (samePlace.value == monforte) {

    //         console.log(samePlace.value);
    //         document.getElementById('destination').disabled = false;

    //     } else {

    //         document.getElementById('destination').disabled = true;

    //     }
    // };


    if (originValue == 'Monforte' && destinationValue == 'Fosso Branco') {

        distance = 60;

    } else if (originValue == 'Monforte' && destinationValue == 'Nogueira') {

        distance = 52;

    } else if (originValue == 'Monforte' && destinationValue == 'Farteixo') {

        distance = 22;

    } else {

        distance = 0;
    }

    console.log(`The distance is ${distance} km`);


    if (transportationValue == 'A pé') {
        speed = 5;
    } else if (transportationValue == 'Carroça boi') {
        speed = 2;
    } else if (transportationValue == 'Carroça cavalo (1)') {
        speed = 4;
    } else if (transportationValue == 'Carroça cavalo (2)') {
        speed = 7;
    } else if (transportationValue == 'Jumento') {
        speed = 5.5;
    } else if (transportationValue == 'Mula') {
        speed = 5.5;
    } else if (transportationValue == 'Cavalo') {
        speed = 5.5;
    } else {
        speed = 0;
    }

    console.log(`The speed is ${speed}km/h`);

    time = distance / speed;
    console.log(`The time is ${Math.floor(time)}`);


    if (weatherValue == 'Ensolarado') {
        time += 0;
    } else if (weatherValue == 'Chuvoso') {
        time += time * 0.2;
    } else if (weatherValue == 'Tempestuoso') {
        time += time * 0.3;
    } else if (weatherValue == 'Nevado') {
        time += time * 0.4;
    } else if (weatherValue == 'Nevasca') {
        time += time * 0.8;
    } else {
        time += 0;
    }

    console.log(`Updated time due to weather is ${Math.floor(time)}`);

    let timeRounded = Math.floor(time);

    // If travel times is greater than 24 it shows as days and hours
    if (time < 24) {
        timeDisplay.innerText = `${timeRounded}h`;
    } else {

        let days = Math.floor(time / 24);
        let remainder = time % 24;
        let hours = Math.floor(remainder);

        timeDisplay.innerText = `${days}d ${hours}h`;

    }


    // let selectOrigin = document.getElementById('origin');
    // let selectDestination = document.getElementById('destination');
    // let selectTransportation = document.getElementById('transportation');
    // let selectWeather = document.getElementById('weather');

    // let formButton = document.getElementsByClassName('form-button');

    // // formButton.addEventListener("change", inputState);

    // formButton.disabled = false;

    // function inputState() {

    //     if (selectOrigin.value == "monforte") {
    //         formButton.disabled = true;
    //     } else {
    //         formButton.disabled = false;
    //     }
    // };



    // if (selectOrigin === "" || selectDestination === "" || selectTransportation === "" || selectWeather === "") 

};

function generateName() {

    let nomesFemininos = [
        'Agnes',
        'Alba',
        'Aldara',
        'Alice',
        'Bárbara',
        'Beatriz',
        'Brenda',
        'Briana',
        'Brígida',
        'Catarina',
        'Cecília',
        'Clara',
        'Constança',
        'Ema',
        'Ênia',
        'Filipa',
        'Helena',
        'Inácia',
        'Inês',
        'Isabel',
        'Isolda',
        'Joana',
        'Lígea',
        'Lívia',
        'Lorença',
        'Loreta',
        'Luana',
        'Lucélia',
        'Luise',
        'Lurdes',
        'Marcelina',
        'Maria',
        'Marta',
        'Matilda',
        'Odília',
        'Rosa',
        'Roseta',
        'Tomásia',
        'Teodora',
        'Tereza',
        'Úrsula',
        'Valentina',
        'Valéria',
        'Vitória',
        'Violeta'
    ];

    let nomesMasculinos = [
        'Afonso',
        'Alberto',
        'Aldenor',
        'Aleixo',
        'Álvaro',
        'Amadeu',
        'Amis',
        'Antônio',
        'Anísio',
        'Artur',
        'Bartolomeu',
        'Bernardo',
        'Césio',
        'Conrado',
        'Custódio',
        'Damião',
        'Eduardo',
        'Efraim',
        'Eliote',
        'Erasmo',
        'Estevão',
        'Eusébio',
        'Fernão',
        'Frederico',
        'Gaspar',
        'Gastão',
        'Geraldo',
        'Godofredo',
        'Gonçalo',
        'Gregório',
        'Guilherme',
        'Heitor',
        'Hugo',
        'Humberto',
        'Isaque',
        'Iseu',
        'Jeremias',
        'Jerônimo',
        'Leonel',
        'Leopoldo',
        'Lourenço',
        'Martim',
        'Mateus',
        'Matias',
        'Melquior',
        'Milo',
        'Nicolas',
        'Ricardo',
        'Romão',
        'Silvestre',
        'Simão',
        'Tarquínio',
        'Teodorico',
        'Tomás',
        'Tomé',
        'Tristão',
        'Valdir',
        'Valentim',
        'Valério'
    ];

    let sobrenomes = [
        'do Rio',
        'Ferreira',
        'Sobrerio'
    ];


    let nameGender = document.getElementById("name-gender");
    let nameGenderValue = nameGender.options[nameGender.selectedIndex].text;

    // Used when creating div and/or h2 tag on every button click
    // let nameContainer = document.getElementById('names-div');

    // let newDiv = document.createElement('div')
    // newDiv.setAttribute('id', 'name-div')
    // let newH2 = document.createElement('h2');
    // newH2.setAttribute('id', 'name-tag')
    let h2Id = document.getElementById('name-field');

    if (nameGenderValue == 'Feminino') {

        let random = Math.floor(Math.random() * nomesFemininos.length);
        // let randomSobrenomes = Math.floor(Math.random() * sobrenomes.length);

        // newDiv.innerHTML = newH2;
        h2Id.innerHTML = nomesFemininos[random];
        // newH2.innerHTML = `${nomesFemininos[random]} ${sobrenomes[randomSobrenomes]}`;

    } else if (nameGenderValue == 'Masculino') {

        let random = Math.floor(Math.random() * nomesMasculinos.length);
        h2Id.innerHTML = nomesMasculinos[random];
        // let randomSobrenomes = Math.floor(Math.random() * sobrenomes.length);

        // newDiv.innerHTML = newH2;
        // newH2.innerHTML = `${nomesMasculinos[random]} ${sobrenomes[randomSobrenomes]}`;

    } else {
        newH2.innerHTML = "Favor selecionar o gênero";

        // Remove the text after 2 seconds.
        setTimeout(function () {
            document.getElementById('name-tag').innerHTML = "";
        }, 2000);
    }

    nameContainer.appendChild(newH2);

};

function audioTab(audioGroup) {
    let i;
    let x = document.getElementsByClassName("audio-tab");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(audioGroup).style.display = "block";
};

function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#myTable tbody").rows;

    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        var thirdCol = rows[i].cells[2].textContent.toUpperCase();
        var fourthCol = rows[i].cells[3].textContent.toUpperCase();

        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || fourthCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
document.querySelector('#myInput').addEventListener('keyup', filterTable, false);

let data = [
    { item: "Queijo", tipo: "Alimento", localVenda: "Taverna", material: "-", quantidade: "450 ml", preco: "0.25" },
    { item: "Espada", tipo: "Arma", localVenda: "Ferreiro", material: "Ferro", quantidade: "1", preco: "45" },
    { item: "Erva, muito comum", tipo: "Ingrediente", localVenda: "Erva, muito comum", material: "- ", quantidade: "30 g", preco: "3" },
    { item: "Erva, comum", tipo: "Ingrediente", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "6" },
    { item: "Erva, incomum", tipo: "Ingrediente", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "12" },
    { item: "Erva, rara", tipo: "Ingrediente", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "60" },
    { item: "Erva, muito rara", tipo: "Ingrediente", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "120" },
    { item: "Alum", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "16" },
    { item: "Gengibre", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "30" },
    { item: "Pimenta", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "36" },
    { item: "Bedellium", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "40" },
    { item: "Canela", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "40" },
    { item: "Câmfora", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "50" },
    { item: "Noz-moscada", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "50" },
    { item: "Franquincenso", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "70" },
    { item: "Ginseng", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "170" },
    { item: "Lashu", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "180" },
    { item: "Mirra", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "150" },
    { item: "Nard", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "100" },
    { item: "Açúcar", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "30 g", preco: "60" },
    { item: "Chá", tipo: "Tempero", localVenda: "Apocatecário", material: "- ", quantidade: "31 g", preco: "35" }
];

function populateTable() {
    var table = "";

    for (var i in data) {
        table += "<tr>";
        table += "<td>"
            + data[i].item + "</td>"
            + "<td>" + data[i].tipo + "</td>"
            + "<td>" + data[i].localVenda + "</td>"
            + "<td>" + data[i].material + "</td>"
            + "<td>" + data[i].quantidade + "</td>"
            + "<td>" + data[i].preco + "</td>";
        table += "</tr>";
    }

    document.getElementById("result").innerHTML = table;

}
populateTable();
