// ========== Populates pages-locais with info from JSON ==========

// $.getJSON("https://vacarneiro.github.io/pages-locais/locais.json", function(data){
//     console.log(data);
// })

// let obj = JSON.parse(text);
// let json_localName = obj.name;
// let localName = document.getElementById("local-name");
//     localName.textContent = 'Muda diabo';



// ========== MDN tutorial ==========

async function populate() {

    const requestURL = 'https://vacarneiro.github.io/pages-locais/locais.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const localInfo = await response.json();

    populateLocal(localInfo);

}


function populateLocal(obj) {

    const localName = document.getElementById('local-name');
    localName.textContent = obj.name[1];
   

}

populateLocal();


// let testando = document.getElementById('local-name');
// testando.textContent = 'Muda diabo';