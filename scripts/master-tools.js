// calculadora-viagem
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



// gerador-nomes
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
        'Edgar',
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
    let h2Id = document.getElementById('name-field');

    if (nameGenderValue == 'Feminino') {

        let random = Math.floor(Math.random() * nomesFemininos.length);
        h2Id.innerHTML = nomesFemininos[random];

    } else if (nameGenderValue == 'Masculino') {

        let random = Math.floor(Math.random() * nomesMasculinos.length);
        h2Id.innerHTML = nomesMasculinos[random];

    } else {
        h2Id.innerHTML = "Favor selecionar o gênero";

        // Remove the text after 2 seconds.
        setTimeout(function () {
            h2Id.innerHTML = "";
        }, 2000);
    }



};



// lista-itens
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
    { nome: "Ombreira", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "20", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "4% Om" },
    { nome: "Dorsal", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "60", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "12% AbT" },
    { nome: "Espaldeira", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "60", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "12% AbF" },
    { nome: "Cotoveleira", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "10", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "2% Ct" },
    { nome: "Grevas", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "50", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "10% Pt" },
    { nome: "Meio elmo", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "20", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "4% Cr" },
    { nome: "Joelheira", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "15", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "3% Jh" },
    { nome: "Braçal", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "30", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "6% Br" },
    { nome: "Antebraçal", categoria: "Armadura", subcategoria: "Couro fervido", localVenda: "Armeiro", preco: "25", material: "Couro fervido", quantidade: "", unidade: "", peso: "", comentario: "5% At" },
    { nome: "Cota curta", categoria: "Armadura", subcategoria: "Malha", localVenda: "Armeiro", preco: "660", material: "Malha", quantidade: "", unidade: "", peso: "", comentario: "44% Br Om Tr Ab Qd Gn" },
    { nome: "Capuz", categoria: "Armadura", subcategoria: "Malha", localVenda: "Armeiro", preco: "120", material: "Malha", quantidade: "", unidade: "", peso: "", comentario: "8% Cr Ps" },
    { nome: "Cota longa", categoria: "Armadura", subcategoria: "Malha", localVenda: "Armeiro", preco: "975", material: "Malha", quantidade: "", unidade: "", peso: "", comentario: "65% túnica + At Ct Cx" },
    { nome: "Calça", categoria: "Armadura", subcategoria: "Malha", localVenda: "Armeiro", preco: "660", material: "Malha", quantidade: "", unidade: "", peso: "", comentario: "44% Qd Gn Cx Jh Tr Pe" },
    { nome: "Luvas", categoria: "Armadura", subcategoria: "Malha", localVenda: "Armeiro", preco: "60", material: "Malha", quantidade: "", unidade: "", peso: "", comentario: "4% Ma" },
    { nome: "Elmo 3/4", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "175", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "7% Cr Fa" },
    { nome: "Ombreira", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "100", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "4% Om" },
    { nome: "Dorsal", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "300", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "12% AbT" },
    { nome: "Espaldeira", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "300", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "12% AbF" },
    { nome: "Cotoveleira", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "50", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "2% Ct" },
    { nome: "Grande elmo", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "275", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "11% Cr Fa Ps" },
    { nome: "Grevas", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "250", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "10% Pt" },
    { nome: "Meio elmo", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "100", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "4% Cr" },
    { nome: "Joelheira", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "75", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "3% Jh" },
    { nome: "Braçal", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "150", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "6% Br" },
    { nome: "Antebraçal", categoria: "Armadura", subcategoria: "Placa", localVenda: "Armeiro", preco: "125", material: "Placa", quantidade: "", unidade: "", peso: "", comentario: "5% At" },
    { nome: "Boina", categoria: "Armadura", subcategoria: "Quilted", localVenda: "Alfaiate", preco: "16", material: "Quilted", quantidade: "", unidade: "", peso: "", comentario: "4% Cr" },
    { nome: "Capuz", categoria: "Armadura", subcategoria: "Quilted", localVenda: "Alfaiate", preco: "32", material: "Quilted", quantidade: "", unidade: "", peso: "", comentario: "8% Cr Ps" },
    { nome: "Jaquetão", categoria: "Armadura", subcategoria: "Quilted", localVenda: "Alfaiate", preco: "260", material: "Quilted", quantidade: "", unidade: "", peso: "", comentario: "65% túnica + At Ct Cx" },
    { nome: "Calça", categoria: "Armadura", subcategoria: "Quilted", localVenda: "Alfaiate", preco: "184", material: "Quilted", quantidade: "", unidade: "", peso: "", comentario: "46% Qd Gn Cx Jh Tr Pe" },
    { nome: "Túnica", categoria: "Armadura", subcategoria: "Quilted", localVenda: "Alfaiate", preco: "176", material: "Quilted", quantidade: "", unidade: "", peso: "", comentario: "44% Br Om Tr Ab Qd Gn" },
    { nome: "Cota curta", categoria: "Armadura", subcategoria: "Ring", localVenda: "Armeiro", preco: "308", material: "Ring", quantidade: "", unidade: "", peso: "", comentario: "44% Br Om Tr Ab Qd Gn" },
    { nome: "Manoplas", categoria: "Armadura", subcategoria: "Ring", localVenda: "Armeiro", preco: "28", material: "Ring", quantidade: "", unidade: "", peso: "", comentario: "4% Ma" },
    { nome: "Meio elmo", categoria: "Armadura", subcategoria: "Ring", localVenda: "Armeiro", preco: "28", material: "Ring", quantidade: "", unidade: "", peso: "", comentario: "4% Cr" },
    { nome: "Cota longa", categoria: "Armadura", subcategoria: "Ring", localVenda: "Armeiro", preco: "455", material: "Ring", quantidade: "", unidade: "", peso: "", comentario: "65% túnica + AbF Ct Cx" },
    { nome: "Calça", categoria: "Armadura", subcategoria: "Ring", localVenda: "Armeiro", preco: "308", material: "Ring", quantidade: "", unidade: "", peso: "", comentario: "44% Qd Gn Cx Jh Tr Pe" },
    { nome: "Veste", categoria: "Armadura", subcategoria: "Ring", localVenda: "Armeiro", preco: "196", material: "Ring", quantidade: "", unidade: "", peso: "", comentario: "28% Om Tr Ab" },
    { nome: "Cota curta", categoria: "Armadura", subcategoria: "Scale", localVenda: "Armeiro", preco: "440", material: "Scale", quantidade: "", unidade: "", peso: "", comentario: "44% Br Om Tr Ab Qd Gn" },
    { nome: "Cota longa", categoria: "Armadura", subcategoria: "Scale", localVenda: "Armeiro", preco: "650", material: "Scale", quantidade: "", unidade: "", peso: "", comentario: "65% túnica + At Ct Cx" },
    { nome: "Veste", categoria: "Armadura", subcategoria: "Scale", localVenda: "Armeiro", preco: "280", material: "Scale", quantidade: "", unidade: "", peso: "", comentario: "28% Om Tr Ab" },
    { nome: "Escudo, bossa", categoria: "Armadura", subcategoria: "Escudo", localVenda: "Armeiro", preco: "12", material: "Escudo", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escudo, broquel", categoria: "Armadura", subcategoria: "Escudo", localVenda: "Armeiro", preco: "24", material: "Escudo", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escudo, gota", categoria: "Armadura", subcategoria: "Escudo", localVenda: "Armeiro", preco: "72", material: "Escudo", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Escudo, cavaleiro", categoria: "Armadura", subcategoria: "Escudo", localVenda: "Armeiro", preco: "60", material: "Escudo", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Escudo, redondo", categoria: "Armadura", subcategoria: "Escudo", localVenda: "Armeiro", preco: "42", material: "Escudo", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escudo, torre", categoria: "Armadura", subcategoria: "Escudo", localVenda: "Armeiro", preco: "96", material: "Escudo", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cinto, couro", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "10", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Botas, panturrilha", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "64", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "16% Pt Pe" },
    { nome: "Botas, joelho", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "76", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "19% Jh Pt Pe" },
    { nome: "Bolsa", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Alfaiate", preco: "9", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Bolsa", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Alfaiate", preco: "60", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Aljava", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "8", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "Comporta 24 flechas" },
    { nome: "Sandálias, couro", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "8", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Coldre, couro", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "48", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Sapatos, couro", categoria: "Vestuário", subcategoria: "Acessórios", localVenda: "Curtume", preco: "24", material: "Acessórios", quantidade: "", unidade: "", peso: "", comentario: "6% Pe" },
    { nome: "Pele, castor", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "30", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, bezerro", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "16", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, cervo", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "6", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, arminho", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "30", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, exótica", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "120+", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, cabra", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "4", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, cavalo", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "10", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, cordeiro", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "3", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, lontra", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "24", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, boi", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "12", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, porco", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "5", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, coelho", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "1", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, rena", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "16", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, foca", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "24", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pele, ovelha", categoria: "Vestuário", subcategoria: "Peles", localVenda: "Curtume", preco: "4", material: "Pele", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Capa", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "67", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "67% sobretudo + Jh Pt" },
    { nome: "Luvas", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "4", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "4% Ma" },
    { nome: "Chapéu", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "4", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "4% Cr" },
    { nome: "Capuz", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "8", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "8% Cr Ps" },
    { nome: "Calça", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "44", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "44% Qd Gn Cx Jh Tr Pe" },
    { nome: "Manto", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "78", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "78% capa + Ct At Br" },
    { nome: "Sobretudo", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "52", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "52% Om Tr Ab Qd Gn Cx" },
    { nome: "túnica", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "44", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "44% Br Om Tr Ab Qd Gn" },
    { nome: "Veste", categoria: "Vestuário", subcategoria: "Linho", localVenda: "Alfaiate", preco: "28", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "28% Om Tr Ab" },
    { nome: "Castor", categoria: "Vestuário", subcategoria: "Material", localVenda: "Curtume", preco: "22", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "18f/% proteção" },
    { nome: "Entretela", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "12", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "10f/% proteção" },
    { nome: "Lona", categoria: "Vestuário", subcategoria: "Material", localVenda: "Estalajadeiro", preco: "4", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "" },
    { nome: "Carpet, lã", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "45+", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "" },
    { nome: "Arminho", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "45", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "10d/% proteção" },
    { nome: "Renda", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "50", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "" },
    { nome: "Couro", categoria: "Vestuário", subcategoria: "Material", localVenda: "Curtume", preco: "16", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "4d/% proteção" },
    { nome: "Linho", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "4", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "1d/% proteção" },
    { nome: "Pele de foca", categoria: "Vestuário", subcategoria: "Material", localVenda: "Curtume", preco: "24", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "5d/% proteção" },
    { nome: "Sarja", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "7", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "6f/% proteção" },
    { nome: "Seda", categoria: "Vestuário", subcategoria: "Material", localVenda: "Alfaiate", preco: "81", material: "", quantidade: "1", unidade: "m²", peso: "3", comentario: "18d/% proteção" },
    { nome: "Lã", categoria: "Vestuário", subcategoria: "Material", localVenda: "Fazenda/mercado", preco: "8", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Alanal", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Halucinógeno" },
    { nome: "Arva", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "120", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Poção forte" },
    { nome: "Berilik", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Desinfetante/anestésico" },
    { nome: "Doshenkana", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "15", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Veneno" },
    { nome: "Ctprequir", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "12", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Afrodisíaco" },
    { nome: "Fanosel", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Narcótico" },
    { nome: "Fletharane", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "20", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Halucinógeno" },
    { nome: "Gaethipa", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "60", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Veneno" },
    { nome: "Habsulara", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "6", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Estimulante cerebral" },
    { nome: "Erva, muito comum", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "1", material: "", quantidade: "10", unidade: "g", peso: "0,01", comentario: "" },
    { nome: "Erva, comum", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "2", material: "", quantidade: "10", unidade: "g", peso: "0,01", comentario: "" },
    { nome: "Erva, incomum", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "4", material: "", quantidade: "10", unidade: "g", peso: "0,01", comentario: "" },
    { nome: "Erva, rara", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "20", material: "", quantidade: "10", unidade: "g", peso: "0,01", comentario: "" },
    { nome: "Erva, muito rara", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "40", material: "", quantidade: "10", unidade: "g", peso: "0,01", comentario: "" },
    { nome: "Hreyochor", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Fertilidade" },
    { nome: "Joldraiven", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "150", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Estimulante equino" },
    { nome: "Kargele", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "150", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Cura para os olhos" },
    { nome: "Lavaryctia]", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Soporífico" },
    { nome: "Leortevald", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "8", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Veneno" },
    { nome: "Metysso", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "40", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Tinta invisível" },
    { nome: "Olrui", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "26", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Estimulante" },
    { nome: "Opióide", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30+", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Narcótico" },
    { nome: "Perigwar", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Afrodisíaco" },
    { nome: "Poção, medicina", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "1.5xIngr.", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Custa 5x preço dos ingredientes" },
    { nome: "Quessel", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Antibiótico" },
    { nome: "Resakile", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "6", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Contraceptivo" },
    { nome: "Stiltrassa", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "60", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Emético/diarrético" },
    { nome: "Tasparth", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "3", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Droga de provação" },
    { nome: "Teranya", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Cura para os olhos" },
    { nome: "Tirageyth", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "15", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Narcótico" },
    { nome: "Wylorafin", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "30", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Estimulante/veneno" },
    { nome: "Ulpris", categoria: "Commodities", subcategoria: "Drogas", localVenda: "Apotecário", preco: "600", material: "", quantidade: "50", unidade: "ml", peso: "0,05", comentario: "Antídoto universal" },
    { nome: "Sangue de dragão", categoria: "Commodities", subcategoria: "Tintas", localVenda: "Alfaiate", preco: "55", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Corante vermelho" },
    { nome: "Índigo", categoria: "Commodities", subcategoria: "Tintas", localVenda: "Alfaiate", preco: "13", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Corante azul" },
    { nome: "Safrão", categoria: "Commodities", subcategoria: "Tintas", localVenda: "Apotecário", preco: "53", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Corante amarelo e tempero" },
    { nome: "Púrpura Tazach", categoria: "Commodities", subcategoria: "Tintas", localVenda: "Alfaiate", preco: "65", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Corante roxo" },
    { nome: "Alum", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "5", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Canela", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "13", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Gengibre", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "10", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Ginseng", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "55", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Ruibarbo em pó", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "60", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Noz-moscada", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "16", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Pimenta", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "12", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Sal", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Saleiro", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Açucar", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "120", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Chá", categoria: "Commodities", subcategoria: "Temperos", localVenda: "Apotecário", preco: "12", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Âmbar, fina", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Minerador", preco: "5", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Chifre, narval", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Baleeiro", preco: "120", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Marfim", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Baleeiro", preco: "150", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Jade", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Minerador", preco: "4000", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Pedra, fina", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Maçon", preco: "3", material: "", quantidade: "1", unidade: "m³", peso: "330", comentario: "" },
    { nome: "Pedra,  calcário", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Maçon", preco: "9", material: "", quantidade: "1", unidade: "m³", peso: "330", comentario: "" },
    { nome: "Pedra,  calcário", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Maçon", preco: "1.5", material: "", quantidade: "1", unidade: "m³", peso: "330", comentario: "" },
    { nome: "Osso de baleia", categoria: "Commodities", subcategoria: "Pedras", localVenda: "Baleeiro", preco: "12", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Latão", categoria: "Commodities", subcategoria: "Metais", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Bronze", categoria: "Commodities", subcategoria: "Metais", localVenda: "Ferreiro", preco: "8", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cobre", categoria: "Commodities", subcategoria: "Metais", localVenda: "Minerador", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ouro", categoria: "Commodities", subcategoria: "Metais", localVenda: "Minerador", preco: "12800", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ferro-gusa", categoria: "Commodities", subcategoria: "Metais", localVenda: "Minerador", preco: "0.5", material: "", quantidade: "10", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Chumbo", categoria: "Commodities", subcategoria: "Metais", localVenda: "Minerador", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Estanho", categoria: "Commodities", subcategoria: "Metais", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Prata", categoria: "Commodities", subcategoria: "Metais", localVenda: "Minerador", preco: "640", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Aço", categoria: "Commodities", subcategoria: "Metais", localVenda: "Ferreiro", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Peltre", categoria: "Commodities", subcategoria: "Metais", localVenda: "Minerador", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "Liga com estanho" },
    { nome: "Gnaxa", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Mascate", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Banha", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Fazenda/mercado", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Óleo, canela", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Perfumista", preco: "20", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Óleo, cozinha", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Mascate", preco: "0.75", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Óleo, murta", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Perfumista", preco: "8", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Óleo, rosas", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Perfumista", preco: "7", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Óleo, baleia", categoria: "Commodities", subcategoria: "Óleos", localVenda: "Baleeiro", preco: "3", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Âmbar cinza", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "60", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "Fixador" },
    { nome: "Bdélio", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "13", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Cânfora", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "16", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Franquincenso", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "23", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Incenso", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "24+", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Mirra", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "50", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Nardo", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "33", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Perfumes", categoria: "Commodities", subcategoria: "Perfumes", localVenda: "Perfumista", preco: "2+", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Cinzas", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "36", material: "", quantidade: "1", unidade: "m³", peso: "550", comentario: "" },
    { nome: "Bétula", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "12", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Cedro", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "25", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Olmo", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "30", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Abeto", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "36", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Lariço", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "18", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Bordo", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "44", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Carvalho", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "55", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Pinho", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "24", material: "", quantidade: "1", unidade: "m³", peso: "400", comentario: "" },
    { nome: "Eucalipto", categoria: "Commodities", subcategoria: "Madeira", localVenda: "Lenhador", preco: "18", material: "", quantidade: "1", unidade: "m³", peso: "350", comentario: "" },
    { nome: "Cevada", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Fazenda/mercado", preco: "5", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Pão, cevada", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.25", material: "", quantidade: "50", unidade: "g", peso: "0.05", comentario: "" },
    { nome: "Pão, centeio", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.25", material: "", quantidade: "50", unidade: "g", peso: "0.05", comentario: "" },
    { nome: "Pão, trigo", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.5", material: "", quantidade: "50", unidade: "g", peso: "0.05", comentario: "" },
    { nome: "Pães", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.5", material: "", quantidade: "12", unidade: "", peso: "2,7", comentario: "" },
    { nome: "Farinha, cevada", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Farinha, centeio", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Farinha, trigo", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Feno", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Bolos de aveia", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.25", material: "", quantidade: "12", unidade: "", peso: "3", comentario: "" },
    { nome: "Aveia", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Aveia", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Torta, fruta", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "3f", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Torta, carne", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Moleiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Centeio", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Trigo", categoria: "Alimentos e Bebidas", subcategoria: "Assados", localVenda: "Fazenda/mercado", preco: "8", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Manteiga", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Queijo", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Creme", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "1.5", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Coalhada", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ovo", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "2", material: "", quantidade: "12", unidade: "", peso: "0,6", comentario: "" },
    { nome: "Leite, vaca", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "0.75", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Leite, cabra", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "0.5", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Leite, ovelha", categoria: "Alimentos e Bebidas", subcategoria: "Laticínios", localVenda: "Fazenda/mercado", preco: "0.5", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Cerveja", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "14", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Cerveja", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "0.25", material: "", quantidade: "0.5", unidade: "l", peso: "0,5", comentario: "" },
    { nome: "Brandy", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "4", material: "", quantidade: "0.5", unidade: "l", peso: "0,5", comentario: "" },
    { nome: "Brandy", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "360", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Cidra", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "16", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Cidra", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "0.25", material: "", quantidade: "0.5", unidade: "l", peso: "0,5", comentario: "" },
    { nome: "Hidromel", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "28", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Hidromel", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "0.5", material: "", quantidade: "0.5", unidade: "l", peso: "0,5", comentario: "" },
    { nome: "Vinho", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "0.75", material: "", quantidade: "0.5", unidade: "l", peso: "0,5", comentario: "" },
    { nome: "Vinho", categoria: "Alimentos e Bebidas", subcategoria: "Bebidas", localVenda: "Estalajadeiro", preco: "80", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Refeição, barata", categoria: "Alimentos e Bebidas", subcategoria: "Refeições", localVenda: "Estalajadeiro", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "Pão e quejo" },
    { nome: "Refeição, fria", categoria: "Alimentos e Bebidas", subcategoria: "Refeições", localVenda: "Estalajadeiro", preco: "0.75", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Refeição, fina", categoria: "Alimentos e Bebidas", subcategoria: "Refeições", localVenda: "Estalajadeiro", preco: "3+", material: "", quantidade: "", unidade: "", peso: "", comentario: "Com carne fresca" },
    { nome: "Refeição, quente", categoria: "Alimentos e Bebidas", subcategoria: "Refeições", localVenda: "Estalajadeiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ensopado e pão aquecidos" },
    { nome: "Bacon", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Bife", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Galinha", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Pato", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cabra", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ganso", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Presunto", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cavalo", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cordeio", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Carne, salgada", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Saleiro", preco: "1.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Carne de carneiro", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Faisão", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Pombo", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Porco", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Coelho", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cisne", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Vitela", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cervo", categoria: "Alimentos e Bebidas", subcategoria: "Carnes", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Sobremesa, torta de queijo", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "Torta de queijo de flor de sabugueiro" },
    { nome: "Sobremesa, creme", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "Doce de ameixa e creme" },
    { nome: "Sobremesa, bolinho", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "Bolinho de massa fresca" },
    { nome: "Sobremesa, peras", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Vinho de peras e mel" },
    { nome: "Sobremesa, torta", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "Torta de groselha" },
    { nome: "Sobremesa, pudim", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "Pudim de pétalas de rosa" },
    { nome: "Sobremesa, torta", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "2f", material: "", quantidade: "", unidade: "", peso: "", comentario: "Torta de maçã" },
    { nome: "Guisado, galinha", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "Torta de galinha e pombo" },
    { nome: "Guisado,enguia", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "3", material: "", quantidade: "", unidade: "", peso: "", comentario: "Enguias e lampreias assadas" },
    { nome: "Guisado, rim", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "Rim e bolinhos" },
    { nome: "Guisado, fígado", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ensopado de fígado e miúdos" },
    { nome: "Guisado, tamboril", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Tamboril e tâmaras" },
    { nome: "Guisado, capão", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "Capão e molho preto" },
    { nome: "Guisado, pato", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "9", material: "", quantidade: "", unidade: "", peso: "", comentario: "Molho de pato e chaudron" },
    { nome: "Guisado, ganso", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "Molho de ganso e fruta" },
    { nome: "Carne e molho, língua de boi", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Molho de língua de boi com ervas" },
    { nome: "Carne e molho, porco", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Molho de porco e maçã" },
    { nome: "Carne e molho, salmão", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "Salmão, creme de mostarda" },
    { nome: "meat&sauce, cisne", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "Cisne negro no brandy" },
    { nome: "Sopa, bife", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "Caldo de carne e cenoura" },
    { nome: "Sopa, repolho", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Sopa, galinha", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "0.75", material: "", quantidade: "", unidade: "", peso: "", comentario: "Caldo de nabo e galinha" },
    { nome: "Sopa, carneiro", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Caldo de carneiro e cevada" },
    { nome: "Sopa, ostra", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "Sopa de mexilhões e ostras" },
    { nome: "Sopa, ervilha", categoria: "Alimentos e Bebidas", subcategoria: "Menu", localVenda: "Estalajadeiro", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "Sopa de feijão e ervilha" },
    { nome: "Maçã", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Feijão", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Bagas", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "1.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Repolho", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cerejas", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Mel", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "3", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Lentinha", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Olivas", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "16", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Peras", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ervilha", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ameixa", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "1.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ervilhaca", categoria: "Alimentos e Bebidas", subcategoria: "Vegetais", localVenda: "Fazenda/mercado", preco: "8", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Bacalhau", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Carangueijo", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Enguia", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "1.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Peixe, seco", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Peixe, salgado", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Saleiro", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Peixe, defumado", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Arenque", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Cavala", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "0.5", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Ostra", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "1", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Lúcio", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Salmão", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Alga marinha", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "12", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Truta", categoria: "Alimentos e Bebidas", subcategoria: "Frutos do mar", localVenda: "Pescador", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Vassoura", categoria: "Utensílios domésticos", subcategoria: "Banho", localVenda: "Palheiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escova, cabelo", categoria: "Utensílios domésticos", subcategoria: "Banho", localVenda: "Mascate", preco: "3", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pente", categoria: "Utensílios domésticos", subcategoria: "Banho", localVenda: "Mascate", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Navalha", categoria: "Utensílios domésticos", subcategoria: "Banho", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Sabão", categoria: "Utensílios domésticos", subcategoria: "Banho", localVenda: "Perfumista", preco: "0.25", material: "", quantidade: "10", unidade: "ml", peso: "0,01", comentario: "" },
    { nome: "Esponja", categoria: "Utensílios domésticos", subcategoria: "Banho", localVenda: "Apotecário", preco: "45", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Saco", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Fabricante de tendas", preco: "4", material: "Lona", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Barril", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Marceneiro", preco: "15", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cesta", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Palheiro", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Garrafa", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Vidraceiro", preco: "6", material: "Vidro", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Balde", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Marceneiro", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cofre", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Chaveiro", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Saco", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Fabricante de tendas", preco: "1", material: "Entretela", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Saco", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Fabricante de tendas", preco: "0.5", material: "Linho", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Urna", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Oleiro", preco: "0.5", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Vaso", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Oleiro", preco: "1", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Odre", categoria: "Utensílios domésticos", subcategoria: "Vasilhas", localVenda: "Curtume", preco: "10", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cama", categoria: "Utensílios domésticos", subcategoria: "Móveis", localVenda: "Marceneiro", preco: "50", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "proteçãotor", categoria: "Utensílios domésticos", subcategoria: "Móveis", localVenda: "Alfaiate", preco: "10", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Armário", categoria: "Utensílios domésticos", subcategoria: "Móveis", localVenda: "Marceneiro", preco: "144", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cadeira", categoria: "Utensílios domésticos", subcategoria: "Móveis", localVenda: "Marceneiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Mesa", categoria: "Utensílios domésticos", subcategoria: "Móveis", localVenda: "Marceneiro", preco: "36", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Baú", categoria: "Utensílios domésticos", subcategoria: "Móveis", localVenda: "Marceneiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Caldeirão", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Ferreiro", preco: "10", material: "Ferro", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Copo", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Oleiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Garrafão", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Oleiro", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cálice", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Ferreiro", preco: "3", material: "Estanho", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Panela", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Ferreiro", preco: "12", material: "Cobre", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Prato", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Ferreiro", preco: "5", material: "Estanho", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Prato", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Ferreiro", preco: "2", material: "Latão", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Caneca", categoria: "Utensílios domésticos", subcategoria: "Cozinha", localVenda: "Ferreiro", preco: "4", material: "Estanho", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Vela", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Mascate", preco: "48", material: "Cera de abelha", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Vela", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Mascate", preco: "6", material: "Banha", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Carvão vegetal", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Carvoeiro", preco: "2", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Carvão mineral", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Carvoeiro", preco: "6", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Lenha", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Carvoeiro", preco: "1", material: "", quantidade: "25", unidade: "kg", peso: "25", comentario: "" },
    { nome: "Lanterna", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Mascate", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Óleo, lâmpada", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Mascate", preco: "3", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Pederneira", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Mascate", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cera,vela", categoria: "Utensílios domésticos", subcategoria: "Luz e fogo", localVenda: "Mascate", preco: "2", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Toldo", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Fabricante de tendas", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Sino, pequeno", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Ferreiro", preco: "1+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Sino, templo", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Ferreiro", preco: "200", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Vidro, Oleiroy", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Vidraceiro", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "Utensílios de cozinha" },
    { nome: "Vidro, colorido", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Vidraceiro", preco: "120", material: "", quantidade: "1", unidade: "m²", peso: "20", comentario: "" },
    { nome: "Vidro, janela", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Vidraceiro", preco: "20", material: "", quantidade: "1", unidade: "m²", peso: "20", comentario: "" },
    { nome: "Cachimbo", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Oleiro", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Baia", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Fabricante de tendas", preco: "24", material: "Lona", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Tenda, pavilhão", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Fabricante de tendas", preco: "200+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Tenda, duas pessoas", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Fabricante de tendas", preco: "27", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Tenda", categoria: "Utensílios domésticos", subcategoria: "Outros", localVenda: "Fabricante de tendas", preco: "30", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "Varia com metragem do chão" },
    { nome: "Bezerro, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "60", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Capão, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Galinha, viva", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pato, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cabra, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "10", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Ganso, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "9", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cordeiro, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pombo, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Porco, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Ovelha, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cisne, vivo", categoria: "Animais", subcategoria: "Animais", localVenda: "Fazenda/mercado", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Urso, treinado", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Treinador", preco: "300+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cão, caça", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Treinador", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cão, pastoreador", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Treinador", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cão, trenó", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Treinador", preco: "30", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cão, treinado", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Treinador", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cão, caça de lobo", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Treinador", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Burro", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Estrebaria", preco: "120", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Falcão, treinado", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Falcoeiro", preco: "100+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cavalo, carroça", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Estrebaria", preco: "180", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cavalo, arado", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Estrebaria", preco: "240", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cavalo, transporte", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Estrebaria", preco: "360", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cavalo, guerra", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Estrebaria", preco: "600+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Mula", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Estrebaria", preco: "180", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Boi", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Fazenda/mercado", preco: "96", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escravo, gladiador", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Escravagista", preco: "480+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escravo, trabalhador", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Escravagista", preco: "240+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escravo, prazer", categoria: "Animais", subcategoria: "Animais de trabalho", localVenda: "Escravagista", preco: "300+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Castelo, grande", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "2.400.000", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Castelo, pequeno", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "240", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Fortaleza, grande", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "480", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Fortaleza, pequena", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "48", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Solar, grande", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "14.4", material: "Pedra", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Solar, pequebo", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "1.44", material: "Pedra", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Moinho", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "960", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Muro", categoria: "Propriedades", subcategoria: "Rural", localVenda: "Maçon", preco: "12", material: "Pedra", quantidade: "", unidade: "1.5 m/m²", peso: "", comentario: "Espessura de 1.5 m" },
    { nome: "Demolição, edifício", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "2.5", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Casa e jardim", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "9.6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Casa, média", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "2.88", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Casa, pobre", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "1.44", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Casa, muito boa", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "4.8", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Casa, muito pobre", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "720", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Casa, suburbana", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Fora dos muros da cidade" },
    { nome: "Casa, urbana, elite", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "6.72", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Casa, urbana, muito boa", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "35", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "Total de todos os andares" },
    { nome: "Casa, urbana, boa", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "25", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "Total de todos os andares" },
    { nome: "Casa, urbana, média", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "15", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "Total de todos os andares" },
    { nome: "Casa, urbana, pobre", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "7.5", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "Total de todos os andares" },
    { nome: "Casa, urbana, muito pobre", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Maçon", preco: "2.5+", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "Total de todos os andares" },
    { nome: "Terreno, surburbano", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Dono de terra", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Fora dos muros da cidade" },
    { nome: "Terreno, urbana, muito boa", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Dono de terra", preco: "70", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Terreno, urbana, boa", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Dono de terra", preco: "50", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Terreno, urbana, média", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Dono de terra", preco: "0", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Terreno, urbana, pobre", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Dono de terra", preco: "15", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Terreno, urbana, muito pobre", categoria: "Propriedades", subcategoria: "Urbano", localVenda: "Dono de terra", preco: "7.5", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Alojamento, dormitório, pobre/noite", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Estalajadeiro", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Palha da cama suja" },
    { nome: "Alojamento, dormitório, médio/noite", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Estalajadeiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Alojamento, quarto/noite", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Estalajadeiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Mobiliado" },
    { nome: "Aluguel/mês", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Estalajadeiro", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "Mobiliado" },
    { nome: "Renda/mês", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Locador", preco: "0.02", material: "", quantidade: "", unidade: "", peso: "", comentario: "2% do valor da propriedade" },
    { nome: "Éstabulo/dia", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Estrebaria", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Éstabulo e feno/dia", categoria: "Serviços e taxas", subcategoria: "Acomodação", localVenda: "Estrebaria", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Faculdade, heráldica/mês", categoria: "Serviços e taxas", subcategoria: "Educação", localVenda: "Arauto", preco: "72", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Diploma e cerimônia, arcano", categoria: "Serviços e taxas", subcategoria: "Educação", localVenda: "Arcanista", preco: "36+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Educação/mês", categoria: "Serviços e taxas", subcategoria: "Educação", localVenda: "Arcanista", preco: "7+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Alojamento e alimentação, capela/mês", categoria: "Serviços e taxas", subcategoria: "Educação", localVenda: "Arcanista", preco: "90", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Teste, admissão, heráldico", categoria: "Serviços e taxas", subcategoria: "Educação", localVenda: "Arauto", preco: "320", material: "", quantidade: "", unidade: "", peso: "", comentario: "Sem reembolso caso falhe" },
    { nome: "Cortesão, bom/tarde", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Cortesão", preco: "1.000+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cortesão/tarde", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Cortesão", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Instrumentos musicais/composição", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Harpista", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Instrumentos musicais/performance", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Harpista", preco: "3+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cortesão/tarde", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Cortesão", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Assento, arena, bom", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Arena", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Assento, arena, ruim", categoria: "Serviços e taxas", subcategoria: "Entretenimento", localVenda: "Arena", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Comissão, vendas", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Litigante", preco: "0.1", material: "", quantidade: "", unidade: "", peso: "", comentario: "Venda de propriedade" },
    { nome: "Contrato", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Litigante", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Comparecimento ao tribunal/dia", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Litigante", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escritura", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Litigante", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Registro, bastardo", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Arauto", preco: "120", material: "", quantidade: "", unidade: "", peso: "", comentario: "Poder usar brasão dos pais" },
    { nome: "Registro, heráldico", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Arauto", preco: "5.000+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Testamento", categoria: "Serviços e taxas", subcategoria: "Legal", localVenda: "Litigante", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Embalsamento", categoria: "Serviços e taxas", subcategoria: "Médico", localVenda: "Embalsamador", preco: "200+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Primeiros socorros", categoria: "Serviços e taxas", subcategoria: "Médico", localVenda: "Médico", preco: "3", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cirurgia, grande", categoria: "Serviços e taxas", subcategoria: "Médico", localVenda: "Médico", preco: "240", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Veterinário/dia", categoria: "Serviços e taxas", subcategoria: "Médico", localVenda: "Estrebaria", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Taxa de fiança/mês", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Cidade", preco: "0.01", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Corretagem", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "0.05", material: "", quantidade: "", unidade: "", peso: "", comentario: "Poder comprar/vender no mercado" },
    { nome: "Câmbio, monetário", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "0.2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Franquia, pousada", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Estalajadeiro", preco: "4.000+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Imposto, falcoaria", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Cidade", preco: "0.1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Empréstimo, comércio local/mês", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "0.05", material: "", quantidade: "", unidade: "", peso: "", comentario: "Sem seguro" },
    { nome: "Empréstimo, comércio distante/mês", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "0.1", material: "", quantidade: "", unidade: "", peso: "", comentario: "Sem seguro" },
    { nome: "Empréstimo, comércio marítimo/mês", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "0.2", material: "", quantidade: "", unidade: "", peso: "", comentario: "Sem seguro" },
    { nome: "Empréstimo, garantido/mês", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "0.01", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Taxa de mercado, baia/dia", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Comércio", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Moagem", categoria: "Serviços e taxas", subcategoria: "Mercador", localVenda: "Moleiro", preco: "0.1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Ancoragem/dia", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "2", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "" },
    { nome: "Dívidas, Guildaa", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Guilda", preco: "0.1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Dívidas, Guildaa, moleiros", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Guilda", preco: "0.2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Licença, moinho/ano", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "240", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Mercado, propriedade", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Lorde", preco: "5%+", material: "", quantidade: "", unidade: "", peso: "", comentario: "Vem da família da noiva" },
    { nome: "Pilotagem", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "32", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Imposto sobre propriedade, negócios", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "0.06", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Imposto sobre propriedade, residência", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "0.08", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Registro, navio", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "150", material: "", quantidade: "", unidade: "m/ano", peso: "", comentario: "" },
    { nome: "Jugada/feudo", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Lorde", preco: "0.2", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ao invés do serviço militar" },
    { nome: "Pedágio, boi", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pedágio, carroça", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pedágio, cavalo", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pedágio, pessoa a pé", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pedágio, ovelha/cabra", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "0.25", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pedágio, carruagem", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Locador", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cais, registrado", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Registrado na cidade" },
    { nome: "Cais/dia", categoria: "Serviços e taxas", subcategoria: "Taxas e licenças", localVenda: "Cidade", preco: "3", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "Não registrado na cidade" },
    { nome: "Beliche, cabine, navio", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Capitão", preco: "1", material: "", quantidade: "4", unidade: "km", peso: "", comentario: "" },
    { nome: "Beliche, porão, navio", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Capitão", preco: "0.25", material: "", quantidade: "4", unidade: "km", peso: "", comentario: "" },
    { nome: "Taxa de caravana, comerciante", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "Disconto para comerciantes" },
    { nome: "Taxa de caravana, a pé", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "2", material: "", quantidade: "20", unidade: "km", peso: "", comentario: "" },
    { nome: "Taxa de caravana, carroça", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "6", material: "", quantidade: "20", unidade: "km", peso: "", comentario: "" },
    { nome: "Taxa de caravana, cavalo", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "4", material: "", quantidade: "20", unidade: "km", peso: "", comentario: "" },
    { nome: "Taxa de caravana, carruagem", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "12", material: "", quantidade: "20", unidade: "km", peso: "", comentario: "" },
    { nome: "Aluguel, navio/dia", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Capitão", preco: "12", material: "", quantidade: "1000", unidade: "l", peso: "", comentario: "" },
    { nome: "Alimentação, cabine, navio/dia", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Capitão", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Alimentação, direção, navio/dia", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Capitão", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Frete, terra", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "20", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Frete, água", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Comércio", preco: "4", material: "", quantidade: "20", unidade: "km/t", peso: "", comentario: "" },
    { nome: "Cuidados, cavalo/dia", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Estrebaria", preco: "4", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Descarregamento, costeiro", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Porto", preco: "1", material: "", quantidade: "1000", unidade: "l", peso: "", comentario: "" },
    { nome: "Carregador/dia", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Carregador", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Ferragem, cavalo", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Estrebaria", preco: "2", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Reparo equipamento de montaria/dia", categoria: "Serviços e taxas", subcategoria: "Transporte", localVenda: "Estrebaria", preco: "0.5", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Machado, lenha", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "1.2", comentario: "" },
    { nome: "Enxada", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "3", material: "", quantidade: "", unidade: "", peso: "1.5", comentario: "" },
    { nome: "Ferro de marcar gado", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "18", material: "", quantidade: "", unidade: "", peso: "0.4", comentario: "" },
    { nome: "Picareta", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "8", material: "", quantidade: "", unidade: "", peso: "1", comentario: "" },
    { nome: "Forcado", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "25", comentario: "" },
    { nome: "Arado", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Marceneiro", preco: "48", material: "", quantidade: "", unidade: "", peso: "60", comentario: "" },
    { nome: "Relha", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "8", material: "", quantidade: "", unidade: "", peso: "25", comentario: "" },
    { nome: "Foice", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "24", material: "", quantidade: "", unidade: "", peso: "1.6", comentario: "" },
    { nome: "Pá", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Ferreiro", preco: "8", material: "", quantidade: "", unidade: "", peso: "1", comentario: "" },
    { nome: "Carrinho de mão", categoria: "Ferramentas", subcategoria: "Agrícolas", localVenda: "Marceneiro", preco: "10", material: "", quantidade: "", unidade: "", peso: "20", comentario: "" },
    { nome: "Harpão", categoria: "Ferramentas", subcategoria: "Pesca", localVenda: "Ferreiro", preco: "40", material: "", quantidade: "", unidade: "", peso: "4", comentario: "" },
    { nome: "Rede, com peso", categoria: "Ferramentas", subcategoria: "Pesca", localVenda: "Estalajadeiro", preco: "30", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "" },
    { nome: "Corda", categoria: "Ferramentas", subcategoria: "Pesca", localVenda: "Estalajadeiro", preco: "3", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "" },
    { nome: "Piche", categoria: "Ferramentas", subcategoria: "Pesca", localVenda: "Mascate", preco: "2", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Corrente", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Ferreiro", preco: "3", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "" },
    { nome: "Formão", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pé de cabra", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Ferreiro", preco: "9", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Martelo", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Escada", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Marceneiro", preco: "2.5", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "" },
    { nome: "Pregos", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Ferreiro", preco: "4", material: "", quantidade: "1", unidade: "kg", peso: "1", comentario: "" },
    { nome: "Tinta", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Mascate", preco: "5+", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Cunha", categoria: "Ferramentas", subcategoria: "Gerais", localVenda: "Lexicógrafo", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Tinta, preto", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "3", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Tinta, azul", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "4", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Tinta, marrom", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "5", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: " Tinta, verde", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "4", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Tinta, vermelho", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "6", material: "", quantidade: "1", unidade: "l", peso: "1", comentario: "" },
    { nome: "Mapa", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "12+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pergaminho", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "20", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Pena", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Selo, assinatura", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "36", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Vellum", categoria: "Ferramentas", subcategoria: "Lexicógrafo", localVenda: "Lexicógrafo", preco: "20", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "" },
    { nome: "Caixão", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Marceneiro", preco: "9", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Gnilhões", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Arpão", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Ferreiro", preco: "10", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pedra de amolar", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Maçon", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Chaves", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Chaveiro", preco: "2+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Fechadura", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Chaveiro", preco: "4+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Mó", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Maçon", preco: "250", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Balança", categoria: "Ferramentas", subcategoria: "Misc. ferramentas", localVenda: "Joalheiro", preco: "72+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Tambor", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "36", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Flauta", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Harpa", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "300", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Chifre, caça", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Curtume", preco: "20", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Chifre, instrumento musical", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "72", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Alaúde", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "200", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Lira", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "120", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Flauta", categoria: "Ferramentas", subcategoria: "Instrumentos musicais", localVenda: "Harpista", preco: "60", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Palanquim", categoria: "Transporte", subcategoria: "Outros", localVenda: "Marceneiro", preco: "100+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Esquis", categoria: "Transporte", subcategoria: "Outros", localVenda: "Marceneiro", preco: "42", material: "Madeira", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Trenó", categoria: "Transporte", subcategoria: "Outros", localVenda: "Marceneiro", preco: "80", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Sapatos de neve/par", categoria: "Transporte", subcategoria: "Outros", localVenda: "Marceneiro", preco: "36", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Âncora", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "1", material: "", quantidade: "1000", unidade: "l", peso: "1000", comentario: "Para cada 1000 l do navio" },
    { nome: "Astrolábio", categoria: "Transporte", subcategoria: "Navio", localVenda: "Piloto", preco: "300", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Compasso", categoria: "Transporte", subcategoria: "Navio", localVenda: "Piloto", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Balestilha", categoria: "Transporte", subcategoria: "Navio", localVenda: "Piloto", preco: "200+", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Mastro", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "18", material: "", quantidade: "1", unidade: "m", peso: "", comentario: "" },
    { nome: "Remo", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "5", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Quadrante", categoria: "Transporte", subcategoria: "Navio", localVenda: "Piloto", preco: "75", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Navio, coca", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "70", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "14 a 25 m" },
    { nome: "Navio, baleeira", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "60", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "18 a 37 m" },
    { nome: "Navio, nau", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "80", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "18 a 29 m" },
    { nome: "Navio, galeão", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "50", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "18 a 46 m" },
    { nome: "Navio, drómon", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "60", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "7 a 18 m" },
    { nome: "Navio, knorr", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "50", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "4 a 6m" },
    { nome: "Navio, Pinnace", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "30", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "15 a 27 m" },
    { nome: "Navio, caravela", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "50", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "7 a 13 m" },
    { nome: "Navio, barco fluvial", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "40", material: "", quantidade: "1", unidade: "m²", peso: "", comentario: "4 a 6 m" },
    { nome: "Peças sobressalentes", categoria: "Transporte", subcategoria: "Navio", localVenda: "Estalajadeiro", preco: "100", material: "", quantidade: "", unidade: "", peso: "", comentario: "Para reparos gerais" },
    { nome: "Cobertor, cavalo", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Rédea", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Colar, cavalo", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pente, cavalo", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "3", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Arnês, cavalo", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Arnês, boi", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Curtume", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Ferradura", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Ferreiro", preco: "1", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Selim", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "80", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Selim, guerra", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Estrebaria", preco: "240", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Esporas", categoria: "Transporte", subcategoria: "Acessório para animais", localVenda: "Ferreiro", preco: "18", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Eixo", categoria: "Transporte", subcategoria: "Carroça", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Carroça, 2 rodas", categoria: "Transporte", subcategoria: "Carroça", localVenda: "Marceneiro", preco: "80", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Carroça, 4 rodas", categoria: "Transporte", subcategoria: "Carroça", localVenda: "Marceneiro", preco: "220", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Roda", categoria: "Transporte", subcategoria: "Carroça", localVenda: "Marceneiro", preco: "18", material: "Madeira", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Roda", categoria: "Transporte", subcategoria: "Carroça", localVenda: "Marceneiro", preco: "30", material: "Madeira e ferro", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Jugo, boi", categoria: "Transporte", subcategoria: "Carroça", localVenda: "Marceneiro", preco: "3", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Machado de batalha", categoria: "Armas", subcategoria: "Machado", localVenda: "Armeiro", preco: "100", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Machado de mão", categoria: "Armas", subcategoria: "Machado", localVenda: "Armeiro", preco: "72", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Machadinha", categoria: "Armas", subcategoria: "Machado", localVenda: "Ferreiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ferramenta" },
    { nome: "Machado de arremesso", categoria: "Armas", subcategoria: "Machado", localVenda: "Armeiro", preco: "48", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Machado de guerra", categoria: "Armas", subcategoria: "Machado", localVenda: "Armeiro", preco: "90", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Zarabatana", categoria: "Armas", subcategoria: "Arma de sopro", localVenda: "Marceneiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Flechas", categoria: "Armas", subcategoria: "Arco", localVenda: "Arqueiro", preco: "15", material: "", quantidade: "12", unidade: "", peso: "0.55", comentario: "" },
    { nome: "Arco longo", categoria: "Armas", subcategoria: "Arco", localVenda: "Arqueiro", preco: "36", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Arco curto", categoria: "Armas", subcategoria: "Arco", localVenda: "Arqueiro", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Clava", categoria: "Armas", subcategoria: "Clava", localVenda: "Marceneiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Maça", categoria: "Armas", subcategoria: "Clava", localVenda: "Armeiro", preco: "84", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Malho", categoria: "Armas", subcategoria: "Clava", localVenda: "Marceneiro", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Estrela d'alva", categoria: "Armas", subcategoria: "Clava", localVenda: "Armeiro", preco: "48", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Besta", categoria: "Armas", subcategoria: "Besta", localVenda: "Armeiro", preco: "60", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Adaga", categoria: "Armas", subcategoria: "Adaga", localVenda: "Armeiro", preco: "24", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Faca", categoria: "Armas", subcategoria: "Adaga", localVenda: "Ferreiro", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ferramenta" },
    { nome: "Faca de arremesso", categoria: "Armas", subcategoria: "Adaga", localVenda: "Armeiro", preco: "20", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Ball & chain", categoria: "Armas", subcategoria: "Mangual", localVenda: "Armeiro", preco: "60", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Mangual", categoria: "Armas", subcategoria: "Mangual", localVenda: "Marceneiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ferramenta" },
    { nome: "Mangual de guerra", categoria: "Armas", subcategoria: "Mangual", localVenda: "Armeiro", preco: "60", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Rede, com peso", categoria: "Armas", subcategoria: "Rede", localVenda: "Curtume", preco: "48", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Glaive", categoria: "Armas", subcategoria: "Vara", localVenda: "Armeiro", preco: "84", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Pique", categoria: "Armas", subcategoria: "Vara", localVenda: "Armeiro", preco: "96", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Arma de haste", categoria: "Armas", subcategoria: "Vara", localVenda: "Armeiro", preco: "96", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Foice", categoria: "Armas", subcategoria: "Vara", localVenda: "Ferreiro", preco: "10", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ferramenta" },
    { nome: "Estilingue", categoria: "Armas", subcategoria: "Estilingue", localVenda: "Curtume", preco: "6", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ferramenta" },
    { nome: "Fustibalus", categoria: "Armas", subcategoria: "Estilingue", localVenda: "Marceneiro", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Dardo", categoria: "Armas", subcategoria: "Lança", localVenda: "Armeiro", preco: "48", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Lança de torneio", categoria: "Armas", subcategoria: "Lança", localVenda: "Armeiro", preco: "120", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Lança", categoria: "Armas", subcategoria: "Lança", localVenda: "Armeiro", preco: "60", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Cajado", categoria: "Armas", subcategoria: "Lança", localVenda: "Marceneiro", preco: "36", material: "", quantidade: "", unidade: "", peso: "", comentario: "Ferramenta" },
    { nome: "Tridente", categoria: "Armas", subcategoria: "Lança", localVenda: "Armeiro", preco: "72", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Espada bastarda", categoria: "Armas", subcategoria: "Espada", localVenda: "Armeiro", preco: "180", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Espada de batalha", categoria: "Armas", subcategoria: "Espada", localVenda: "Armeiro", preco: "230", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Espada large", categoria: "Armas", subcategoria: "Espada", localVenda: "Armeiro", preco: "150", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Estoque", categoria: "Armas", subcategoria: "Espada", localVenda: "Armeiro", preco: "150", material: "", quantidade: "", unidade: "", peso: "", comentario: "Nobreza" },
    { nome: "Alfange", categoria: "Armas", subcategoria: "Espada", localVenda: "Armeiro", preco: "120", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Espada curta", categoria: "Armas", subcategoria: "Espada", localVenda: "Armeiro", preco: "90", material: "", quantidade: "", unidade: "", peso: "", comentario: "" },
    { nome: "Chicote", categoria: "Armas", subcategoria: "Chicote", localVenda: "Curtume", preco: "12", material: "", quantidade: "", unidade: "", peso: "", comentario: "" }
];

function populateTable() {
    var table = "";

    for (var i in data) {
        table += "<tr>";
        table += "<td>"
            + data[i].nome + "</td>"
            + "<td>" + data[i].categoria + "</td>"
            + "<td>" + data[i].subcategoria + "</td>"
            + "<td>" + data[i].localVenda + "</td>"
            + "<td>" + data[i].preco + "</td>"
            + "<td>" + data[i].material + "</td>"
            + "<td>" + data[i].quantidade + "</td>"
            + "<td>" + data[i].unidade + "</td>"
            + "<td>" + data[i].peso + "</td>"
            + "<td>" + data[i].comentario + "</td>";
        table += "</tr>";
    }

    document.getElementById("result").innerHTML = table;

}
populateTable();



// calendario

// Get the current date
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Create an array of months and years to populate the select elements
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let years = [];
for (let i = currentYear - 10; i <= currentYear + 10; i++) {
    years.push(i);
}

// Populate the select elements with the months and years
let monthSelect = document.getElementById

// const events = [
//     { date: "2023-04-10", title: "Event 1", description: "Description of Event 1" },
//     { date: "2023-04-15", title: "Event 2", description: "Description of Event 2" },
//     { date: "2023-04-20", title: "Event 3", description: "Description of Event 3" }
// ];

// const calendarGrid = document.querySelector(".calendar-grid");
// const currentMonthYear = document.querySelector("#currentMonthYear");
// const prevMonth = document.querySelector("#prevMonth");
// const nextMonth = document.querySelector("#nextMonth");

// let currentDate = new Date();

// function populateCalendar() {
//     calendarGrid.innerHTML = "";
//     currentMonthYear.innerHTML = currentDate.toLocaleDateString("en-us", { month: "long", year: "numeric" });

//     const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
//     const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//         let week = document.createElement("div");
//         week.classList.add("calendar-week");
//         for (let j = 0; j < 7; j++) {
//             let day = document.createElement("div");
//             day.classList.add("calendar-day");
//             if (i === 0 && j < firstDayOfMonth.getDay()) {
//                 day.innerHTML = "";
//             } else if (date > lastDayOfMonth.getDate()) {
//                 day.innerHTML = "";
//             } else {
//                 day.innerHTML = date;
//                 day.setAttribute("data-date", `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${date}`);
//                 date++;
//                 day.addEventListener("click", showEvent);
//                 for (let event of events) {
//                     if (event.date === day.getAttribute("data-date")) {
//                         day.classList.add("has-event");
//                     }
//                 }
//             }
//             week.appendChild(day);
//         }
//         calendarGrid.appendChild(week);
//     }
// }

// function showEvent() {
//     const eventContainer = document.createElement("div");
//     eventContainer.classList.add("event-container");

//     const date = this.getAttribute("data-date");

//     const event = events.find(e => e.date === date);

//     const title =
// }








