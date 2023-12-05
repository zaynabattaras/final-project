console.log("here");

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("<a href = state.html>State</a><br>This is an interactive map.").openPopup();