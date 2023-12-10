//interactive mao tutorial
//https://leafletjs.com/examples/choropleth/

//geojson map
//https://leafletjs.com/examples/geojson/


// Initialize the map
console.log(statesData);
var map = L.map('map').setView([16, 30.5], 6);

// Add a tile layer (you can use different tile providers)
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '© OpenStreetMap contributors'
}).addTo(map);
L.geoJson(statesData).addTo(map);
//let mapP = document.querySelector("#map");
//mapP.addEventListener("mouseover",highlightFeature);
//mapP.addEventListener("mouseout",resetHighlight);
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

function highlightFeature(event) {
    var layer = event.target;
    console.log("in highlight");
    layer.setStyle({
        weight: 5,
        color: 'red',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}

function resetHighlight(event) {
    console.log("in reset");
    geojson.resetStyle(event.target);
}
var geojson;
function clickToPage(event){
    var layer = event.target;
   //console.log(layer.feature);
   //of (layer instanceof L.geojson) {
        // Log the entire GeoJSON feature
    stateName = layer.feature.properties.name;
        console.log(layer.feature.properties.name);
    //let locationF = layer.feature;
   // }
    //let locationP = locationF["properties"];


   // console.log(location)
   window.location.href = 'state.html?state='+stateName;
}
//var geojson;
//geojson = L.geoJson(statesData);
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: clickToPage
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
// Add a marker
//var marker = L.marker([15, 30]).addTo(map);
//marker.bindPopup("<a href = state.html>State</a><br>This is an interactive map.").openPopup();