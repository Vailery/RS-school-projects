const L = require('../leflet/leaflet.js');
import '../leflet/leaflet.css';

export default function getMap(context) {
    const map = L.map('mapId').setView([34.80746, -40.4796], 3);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    context.map = map;
    return map;
}