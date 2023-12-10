//interactive mao tutorial code refernced in this file
//https://leafletjs.com/examples/choropleth/

//geojson map code refernced in this file
//https://leafletjs.com/examples/geojson/


// Initialize the map
var map = L.map('map').setView([16, 30.5], 5);

// Adding a tile layer to map
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '© OpenStreetMap contributors'
}).addTo(map);
//adding statesData to map
L.geoJson(statesData).addTo(map);
//style function that sets feature style
function style(feature) {
    return {
        fillColor:"green",
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.7
    };
}
//highlets layer as hover
function highlight(event) {
    var layer = event.target;
    layer.setStyle({
        weight: 5,
        color: 'red',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}
//reset styling to normal after hover out 
function reset(event) {
    geojson.resetStyle(event.target);
}
var geojson;
//us to go to state page when clicking
function clickToPage(event){
    var layer = event.target;
    stateName = layer.feature.properties.name;
    window.location.href = 'state.html?state='+stateName;
}
//adds eventlistener to each feature
function perLayer(feature,layer) {
    layer.on({
        mouseover: highlight,
        mouseout: reset,
        click: clickToPage
    });
}
//adds all eventlisteners to map
geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: perLayer
}).addTo(map);
