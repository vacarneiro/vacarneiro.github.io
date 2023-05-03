// ==================== General map layout ====================

// Creates the map
var map = L.map('map').setView([0, 0], 2);

// Reference the tiles
L.tileLayer('images/map/{z}/{x}/{y}.png', {
  minZoom: 2,
  maxZoom: 4,
  continuousWorld: false, // Removes tiling
  noWrap: true, // Rremoves tiling
}).addTo(map);

// Shows scale 
// L.control.scale({
//   maxWidth: 200, // Scale used and width of measurement
//   imperial: false, // Removes imperial measurement
// }).addTo(map);


// Centers map if map bounds are reached
map.setMaxBounds(map.getBounds());


// ==================== Icons ====================

// Custom icons
var villageIcon = L.icon({
  iconUrl: 'images/icons/icon_village_colored.svg',

  iconSize: [48, 48], // Size of the icon
  iconAnchor: [22, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [10, 10], // Point from which the popup should open relative to the iconAnchor
});

// Custom icon for towns
var townIcon = L.icon({
  iconUrl: 'images/icons/icon_town_colored.svg',

  iconSize: [48, 48], // Size of the icon
  iconAnchor: [22, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [10, 10] // Point from which the popup should open relative to the iconAnchor
});

// Custom icon for landmarks
var landmarkIcon = L.icon({
  iconUrl: 'images/icons/icon_landmark.svg',

  iconSize: [48, 48], // Size of the icon
  iconAnchor: [22, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [10, 10] // Point from which the popup should open relative to the iconAnchor
});

// ==================== Markers ====================
('<a href="pages-locais/vilas/.html"></a>')
// Villages
var vil_arroioSeco = L.marker([-27.605671, 96.59179], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/arroio-seco.html">Arroio Seco</a>').openPopup();
var vil_aveiro = L.marker([-62.471724, -18.808594], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/aveiro.html">Aveiro</a>').openPopup();
var vil_baixio = L.marker([35.532226, 136.494141], { icon: villageIcon }).bindPopup('<b>Baixio</b>').openPopup();
var vil_cervoBranco = L.marker([-63.821288, 89.912109], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/cervo-branco.html">Cervo Branco</a>').openPopup();
var vil_faro = L.marker([-15.707663, 13.095703], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/faro.html">Faro</a>').openPopup();
var vil_farteixo = L.marker([-14.604847, -24.169922], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/farteixo.html">Farteixo</a>').openPopup();
var vil_ferroso = L.marker([33.504759, -49.74609], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/ferroso.html">Ferroso</a>').openPopup();
var vil_fornalhas = L.marker([-7.710992, 170.332031], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/fornalhas.html">Fornalhas</a>').openPopup();
var vil_juncalto = L.marker([-48.864715, 22.587891], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/juncalto.html">Juncalto</a>').openPopup();
var vil_monteCaprino = L.marker([16.383391, 145.898438], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/monte-caprino.html">Monte Caprino</a>').openPopup();
var vil_monforte = L.marker([16.467695, -11.337891], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/monforte.html">Monforte</a>').openPopup();
var vil_nogueira = L.marker([-1.318243, -76.64062], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/nogueira.html">Nogueira</a>').openPopup();
var vil_outeiro = L.marker([3.864255, 14.589844], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/outeiro.html">Outeiro</a>').openPopup();
var vil_paragens = L.marker([-22.350076, 39.814453], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/paragens.html">Paragens</a>').openPopup();
var vil_pavia = L.marker([-31.353637, 0], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/pavia.html">Pávia</a>').openPopup();
var vil_penedo = L.marker([18.479609, -33.925781], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/penedo.html">Penedo</a>').openPopup();
var vil_portoFundo = L.marker([-75.430979, -80.683594], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/porto-fundo.html">Porto Fundo</a>').openPopup();
var vil_pradoNovo = L.marker([-76.65952, 102.568359], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/prado-novo.html">Prado Novo</a>').openPopup();
var vil_pradoRibeiro = L.marker([-40.380028, 149.0625], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/prado-ribeiro.html">Prado Ribeiro</a>').openPopup();
var vil_rochaNegra = L.marker([-1.318243, 100.107422], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/rocha-negra.html">Rocha Negra</a>').openPopup();
var vil_salgueiro = L.marker([-55.178868, 121.289063], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/salgueiro.html">Salgueiro</a>').openPopup();
var vil_solarAlamo = L.marker([-56.607885, 170.859375], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/solar-alamo.html">Solar Álamo</a>').openPopup();
var vil_solarDolga = L.marker([-20.303418, 120.322266], { icon: villageIcon }).bindPopup("<a href='pages-locais/vilas/solar-dolga.html'>Solar d'Olga</a>").openPopup();
var vil_valongo = L.marker([-21.043491, 68.466797], { icon: villageIcon }).bindPopup('<a href="pages-locais/vilas/valongo.html">Valongo</a>').openPopup();

// Towns
var tw_forteAmarelo = L.marker([-73.578167, 36.738281], { icon: townIcon }).bindPopup(('<a href="pages-locais/cidades/forte-amarelo.html">Forte Amarelo</a>'));
var tw_fossoBranco = L.marker([56.752723, 31.992188], { icon: townIcon }).bindPopup(('<a href="pages-locais/cidades/fosso-branco.html">Fosso Branco</a>'));

// Landmarks
var lm_baiaDasOrcas = L.marker([55.528631, -152.578125], { icon: landmarkIcon }).bindPopup('<b>Baía das Orcas</b>').openPopup();
var lm_baiaEsmeralda = L.marker([-70.78691, -104.238281], { icon: landmarkIcon }).bindPopup('<b>Baía Esmeralda</b>').openPopup();
var lm_baiaSocobro = L.marker([-70.78691, -104.238281], { icon: landmarkIcon }).bindPopup('<b>Baía Socobro</b>').openPopup();
var lm_bosqueCaligem = L.marker([-72.711903, 153.984375], { icon: landmarkIcon }).bindPopup('<b>Bosque Caligem</b>').openPopup();
var lm_bosqueCarocha = L.marker([-27.44979, 26.542969], { icon: landmarkIcon }).bindPopup('<b>Bosque Carocha</b>').openPopup();
var lm_bosqueDasCobras = L.marker([-73.453473, 84.550781], { icon: landmarkIcon }).bindPopup('<b>Bosque das Cobras</b>').openPopup();
var lm_bosqueDasFaias = L.marker([-7.275292, -9.228516], { icon: landmarkIcon }).bindPopup('<b>Bosque das Faias</b>').openPopup();
var lm_bosqueDasGrutas = L.marker([-51.344339, 49.570313], { icon: landmarkIcon }).bindPopup('<b>Bosque das Grutas</b>').openPopup();
var lm_bosqueDoAleijado = L.marker([44.964798, 92.900391], { icon: landmarkIcon }).bindPopup('<b>Bosque do Aleijado</b>').openPopup();
var lm_bosqueDoTemplo = L.marker([2.284551, 39.550781], { icon: landmarkIcon }).bindPopup('<b>Bosque do Templo</b>').openPopup();
var lm_bosqueLongo = L.marker([-68.784144, -23.994141], { icon: landmarkIcon }).bindPopup('<b>Bosque Longo</b>').openPopup();
var lm_bosquePedregulho = L.marker([31.802893, -9.49218], { icon: landmarkIcon }).bindPopup('<b>Bosque Pedregulho</b>').openPopup();
var lm_bosqueSortilegio = L.marker([21.779905, 97.382813], { icon: landmarkIcon }).bindPopup('<b>Bosque Sortilégio</b>').openPopup();
var lm_cachoeiraFurtacor = L.marker([75.027664, 71.191406], { icon: landmarkIcon }).bindPopup('<b>Cachoeira Furta-cor</b>').openPopup();
var lm_colinadoDosUivos = L.marker([53.225768, 147.568359], { icon: landmarkIcon }).bindPopup('<b>Colinado dos Uivos</b>').openPopup();
var lm_colinasMortas = L.marker([4.65308, -114.697266], { icon: landmarkIcon }).bindPopup('<b>Colinas Mortas</b>').openPopup();
var lm_colinasPlacidas = L.marker([70.259452, -127.17773], { icon: landmarkIcon }).bindPopup('<b>Colinas Plácidas</b>').openPopup();
var lm_desfiladeiroDoRei = L.marker([-68.847665, 127.880859], { icon: landmarkIcon }).bindPopup('<b>Desfiladeiro do Rei</b>').openPopup();
var lm_ermoDoNorte = L.marker([67.169955, 16.083984], { icon: landmarkIcon }).bindPopup('<b>Ermo do Norte</b>').openPopup();
var lm_florestaDasBrumas = L.marker([-16.720385, -63.369141], { icon: landmarkIcon }).bindPopup('<b>Floresta das Brumas</b>').openPopup();
var lm_florestaDosSussurros = L.marker([52.749594, -78.39843], { icon: landmarkIcon }).bindPopup('<b>Floresta dos Sussuros</b>').openPopup();
var lm_florestaPelago = L.marker([-70.699951, -151.083984], { icon: landmarkIcon }).bindPopup('<b>Floresta Pélago</b>').openPopup();
var lm_lagoAtlas = L.marker([49.037868, -126.298828], { icon: landmarkIcon }).bindPopup('<b>Lago Atlas</b>').openPopup();
var lm_lagoBranco = L.marker([-43.004647, 81.650391], { icon: landmarkIcon }).bindPopup('<b>Lago Branco</b>').openPopup();
var lm_lagoCavo = L.marker([72.685765, 71.279297], { icon: landmarkIcon }).bindPopup('<b>Lago Cavo</b>').openPopup();
var lm_lagoDasAlgas = L.marker([57.844751, 85.07812], { icon: landmarkIcon }).bindPopup('<b>Lago das Algas</b>').openPopup();
var lm_lagoDasEscarpas = L.marker([-34.885931, -107.226563], { icon: landmarkIcon }).bindPopup('<b>Lago das Escarpas</b>').openPopup();
var lm_lagoDoCisne = L.marker([27.683528, 124.892578], { icon: landmarkIcon }).bindPopup('<b>Lago do Cisne</b>').openPopup();
var lm_lagoDosPatos = L.marker([-66.478208, 72.59765], { icon: landmarkIcon }).bindPopup('<b>Lago dos Patos</b>').openPopup();
var lm_lagoNegro = L.marker([-70.259452, 27.59765], { icon: landmarkIcon }).bindPopup('<b>Lago Negro</b>').openPopup();
var lm_lagoPeoni = L.marker([5.623037, 57.216797], { icon: landmarkIcon }).bindPopup('<b>Lago Peoni</b>').openPopup();
var lm_montanhaDaGuarda = L.marker([32.62087, -114.082031], { icon: landmarkIcon }).bindPopup('<b>Montanha da Guarda</b>').openPopup();
var lm_montanhaSafara = L.marker([41.310824, 65.039063], { icon: landmarkIcon }).bindPopup('<b>Montanha Sáfara</b>').openPopup();
var lm_monteAgulha = L.marker([38.68551, -157.236328], { icon: landmarkIcon }).bindPopup('<b>Monte Agulha</b>').openPopup();
var lm_monteBranco = L.marker([-61.396719, 21.445313], { icon: landmarkIcon }).bindPopup('<b>Monte Branco</b>').openPopup();
var lm_monteGranito = L.marker([-3.864255, -118.212891], { icon: landmarkIcon }).bindPopup('<b>Monte Granito</b>').openPopup();
var lm_monteRoto = L.marker([-38.479395, -58.359375], { icon: landmarkIcon }).bindPopup('<b>Monte Roto</b>').openPopup();
var lm_pantanoMorto = L.marker([-63.860036, -87.89062], { icon: landmarkIcon }).bindPopup('<b>pantanoMorto</b>').openPopup();
var lm_passoDasMulas = L.marker([-52.375599, 81.298828], { icon: landmarkIcon }).bindPopup('<b>Passo das Mulas</b>').openPopup();
var lm_penedoEstrela = L.marker([68.911005, 148.007813], { icon: landmarkIcon }).bindPopup('<b>Penedo Estrela</b>').openPopup();
var lm_penedoPonteiro = L.marker([62.267923, 77.167969], { icon: landmarkIcon }).bindPopup('<b>Penedo Ponteiro</b>').openPopup();
// var lm_XXXXXX = L.marker([XXXXXX], { icon: landmarkIcon }).bindPopup('<b>XXXXXX</b>').openPopup();

// Manors
var mn_Monforte = L.polygon([
  [1.406109, -76.640625],
  [32.546813, -50.625],
  [55.776573, 33.046875],
  [16.299051, -10.546875],
  [-16.130262, 13.359375],
  [-14.944785, -24.257813]
])

// Define the label text for the manor
var labelTextMonforte = "Monforte";

// Add the tooltip to the center of the polygon
var tooltip = L.tooltip({
    direction: 'center',
    permanent: true,
    className: 'my-label',
    offset: [0, 0]
}).setContent(labelTextMonforte);

mn_Monforte.bindTooltip(tooltip).openTooltip();


// ==================== Groups ====================

// Combines custom markers into marker groups, which correspond to layers
var mgVillages = L.layerGroup([vil_arroioSeco, vil_monforte, vil_aveiro, vil_baixio, vil_cervoBranco, vil_faro, vil_farteixo, vil_ferroso, vil_fornalhas, vil_juncalto, vil_monteCaprino, vil_nogueira, vil_outeiro, vil_paragens, vil_pavia, vil_penedo, vil_portoFundo, vil_pradoNovo, vil_pradoRibeiro, vil_rochaNegra, vil_salgueiro, vil_solarAlamo, vil_solarDolga, vil_valongo]);

var mgTowns = L.layerGroup([tw_forteAmarelo, tw_fossoBranco]);

var mgLandmarks = L.layerGroup([lm_baiaDasOrcas, lm_baiaEsmeralda, lm_baiaSocobro, lm_bosqueCaligem, lm_bosqueCarocha, lm_bosqueDasCobras, lm_bosqueDasFaias, lm_bosqueDasGrutas, lm_bosqueDoAleijado, lm_bosqueDoTemplo, lm_bosqueDoTemplo, lm_bosqueLongo, lm_bosquePedregulho, lm_bosqueSortilegio, lm_cachoeiraFurtacor, lm_colinadoDosUivos, lm_colinasMortas, lm_colinasPlacidas, lm_desfiladeiroDoRei, lm_ermoDoNorte, lm_florestaDasBrumas, lm_florestaDosSussurros, lm_florestaPelago, lm_lagoAtlas, lm_lagoBranco, lm_lagoCavo, lm_lagoDasAlgas, lm_lagoDasEscarpas, lm_lagoDoCisne, lm_lagoDosPatos, lm_lagoNegro, lm_lagoPeoni, lm_montanhaDaGuarda, lm_montanhaSafara, lm_monteAgulha, lm_monteBranco, lm_monteGranito, lm_monteRoto, lm_pantanoMorto, lm_passoDasMulas, lm_penedoEstrela, lm_penedoPonteiro]);

var mgManors = L.layerGroup([mn_Monforte]);

// Marker overlay
var overlays = {
  "Vilas": mgVillages,
  "Cidades": mgTowns,
  "Pontos de interesse": mgLandmarks,
  "Feudos": mgManors,
}

// Group (layer) controls
L.control.layers(null, overlays).addTo(map);

map.addLayer(mgVillages);
map.addLayer(mgTowns);

// ==================== Other icons and labels ====================

// Inserts custom icons in map
// L.marker([16.467695, -11.337891], { icon: villageIcon }).addTo(map);
// L.marker([56.752723, 31.992188], { icon: townIcon }).addTo(map);

// Label with text only (for naming places)
// var marker = new L.marker([-5, -33], { opacity: 0 });
// marker.bindTooltip("Monforte", {permanent: true, className: "my-label", offset: [0, 0] });
// marker.addTo(map);



// ==================== Latitude and Longitude ====================

// Returns latitude and longitude in an popup when clicking on map
// var popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// }
// map.on('click', onMapClick);

// Draggable icon that works as coordinate finder
// var marker = L.marker([0, 0], {
//   draggable: true,
// }).addTo(map);
// marker.bindPopup('LatLng Marker').openPopup();
// marker.on('dragend', function (e) {
//   marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
// });



// ==================== Polygons ====================

// Exeample of polygon


//Shows message on clicking on polygon
// polygon.bindPopup("Feudo de Fosso Branco");

// var manorMonforte = L.polygon([
//   [1.406109, -76.640625],
//   [32.546813, -50.625],
//   [55.776573, 33.046875],
//   [16.299051, -10.546875],
//   [-16.130262, 13.359375],
//   [-14.944785, -24.257813]
// ]).addTo(map);
