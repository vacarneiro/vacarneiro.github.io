const monforte = {
    nome: "Monforte",
    suserano: "Lorde Erasmo",
    meirinho: "Iseu",
    regiao: "Planície",
    area: "800",
    economia: "Cereais",
    tamanho: "Pequeno-mediano",
    construcoes: [
        "Solar com paliçada de madeira",
        "Taverna",
        "Estábulo"
    ],
    residentesDestaque: [
        "pc-lugo",
        "pc-olivia",
        "plebe-jose",
        "plebe-joao",
        "plebe-heitor"
    ],
    notas: [
        "Local de residência de Erasmo e Olívia",
        "Centro administrativo do feudo de Monforte"
    ]
};

const farteixo = {
    nome: "Farteixo",
    suserano: "Lorde Erasmo",
    meirinho: "-",
    regiao: "Planície",
    area: "600",
    economia: "Grãos",
    tamanho: "Pequeno",
    construcoes: [
        "Abadia em estágio inicial de construção",
        "Taverna"
    ],
    residentesDestaque: [
        "clero-bernardo",
        "clero-artur",
        "clero-joao",
        "plebe-matias",
        "plebe-jonas",
        "plebe-teodora"
    ],
    notas: [
        "Lugoe e Olívia envenenaram residentes com vinho e, como resultado, provocaram incêndios na abadia em construção, alguns camponeses com machucados leves e outros danos materiais pequenos"
    ]
};

// Fields in html to be replaced
let localNome = document.getElementById('local-nome');
let localSuserano = document.getElementById('local-suserano');
let localMeirinho = document.getElementById('local-meirinho');
let localRegiao = document.getElementById('local-regiao');
let localArea = document.getElementById('local-area');
let localEconomia = document.getElementById('local-economia');
let localTamanho = document.getElementById('local-tamanho');
let localConstrucoes1 = document.getElementById('local-construcoes-1');
let localConstrucoes2 = document.getElementById('local-construcoes-2');
let localConstrucoes3 = document.getElementById('local-construcoes-3');
let localResidentesDestaque = document.getElementById('local-residentes-destaque');
let localNotas1 = document.getElementById('local-notas-1');
let localNotas2 = document.getElementById('local-notas-2');
let localNotas3 = document.getElementById('local-notas-3');

// Variables that contain value from object/array specific to each village
let localNomeDb = (Object.values(monforte)[0]);
let localSuseranoDb = (Object.values(monforte)[1]);
let localMeirinhoDb = (Object.values(monforte)[2]);
let localRegiaoDb = (Object.values(monforte)[3]);
let localAreaDb = (Object.values(monforte)[4]);
let localEconomiaDb = (Object.values(monforte)[5]);
let localTamanhoDb = (Object.values(monforte)[6]);
// These are arrays that contain 3 itens
let localConstrucoesDb1 = (Object.values(monforte)[7][0]);
let localConstrucoesDb2 = (Object.values(monforte)[7][1]);
let localConstrucoesDb3 = (Object.values(monforte)[7][2]);
let localResidentesDestaqueDb1 = (Object.values(monforte)[8][0]);
let localResidentesDestaqueDb2 = (Object.values(monforte)[8][1]);
let localResidentesDestaqueDb3 = (Object.values(monforte)[8][2]);
let localResidentesDestaqueDb4 = (Object.values(monforte)[8][3]);
let localResidentesDestaqueDb5 = (Object.values(monforte)[8][4]);
let localNotasDb1 = (Object.values(monforte)[9][0]);
let localNotasDb2 = (Object.values(monforte)[9][1]);
let localNotasDb3 = (Object.values(monforte)[9][2]);

// Finds the HTML file name
// function pageName() {
//     let path = window.location.pathname;
//     let page = path.split("/").pop();
//     let pageName = page.substring(0, page.length - 5);
//     console.log("Name of HTML page: " + pageName);
// };

function replaceLocalNames() {
    console.log(localNomeDb);
    console.log(localNome);
    // console.log(localConstrucoesDb3);

    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
    document.getElementById('local-nome').textContent = (Object.values(monforte)[0]);
/*     localSuserano.textContent = localSuseranoDb;
    localMeirinho.textContent = localMeirinhoDb;
    localRegiao.textContent = localRegiaoDb;
    localArea.textContent = localAreaDb;
    localEconomia.textContent = localEconomiaDb;
    localTamanho.textContent = localTamanhoDb;
    localConstrucoes1.textContent = localConstrucoesDb1;
    localConstrucoes2.textContent = localConstrucoesDb2;
    localConstrucoes3.textContent = localConstrucoesDb3;
    localNotas1.textContent = localNotasDb1;
    localNotas2.textContent = localNotasDb2;
    localNotas3.textContent = localNotasDb3; */
};

replaceLocalNames();



