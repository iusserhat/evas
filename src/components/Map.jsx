import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker ikonu ayarı (Leaflet'in varsayılan ikonu düzgün çalışmayabilir)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Örnek etkinlik verileri
const eventData = [
  {
    id: 1,
    name: "Gençlik Konferansı",
    description: "Bu etkinlik genç liderler için düzenlenmiştir.",
    location: [40.978, 29.100], // Koordinatlar
  },
  {
    id: 2,
    name: "Kodlama Atölyesi",
    description: "Gençler için başlangıç seviyesi kodlama eğitimi.",
    location: [41.008, 28.978],
  },
  {
    id: 3,
    name: "Sosyal Medya Pazarlama Semineri",
    description: "Genç girişimciler için sosyal medya pazarlama ipuçları.",
    location: [41.015, 29.002],
  },
];

const Map = () => {
  return (
    <MapContainer
      center={[41.008, 28.978]} // İstanbul koordinatları
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {eventData.map((event) => (
        <Marker key={event.id} position={event.location}>
          <Popup>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
