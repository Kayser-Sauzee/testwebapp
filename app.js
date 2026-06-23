// Initialisation carte (centre Nord de la France)
const map = L.map('map').setView([50.5, 2.5], 9);

// Fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Données fictives
const events = [
  {
    name: "Cyclo Lille",
    type: "velo",
    lat: 50.6292,
    lng: 3.0573
  },
  {
    name: "Trail Arras",
    type: "course",
    lat: 50.291,
    lng: 2.777
  },
  {
    name: "Rando Mont Cassel",
    type: "rando",
    lat: 50.8,
    lng: 2.45
  }
];

// Ajout liste + markers
const list = document.getElementById("list");

events.forEach(e => {

  // Marker
  const marker = L.marker([e.lat, e.lng]).addTo(map)
    .bindPopup(`<b>${e.name}</b>`);

  // Liste
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = e.name;

  div.onclick = () => {
    map.setView([e.lat, e.lng], 12);
    marker.openPopup();
  };

  list.appendChild(div);
});