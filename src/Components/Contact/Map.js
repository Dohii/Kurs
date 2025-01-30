import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const Map = () => {
  return (
    <div className="map-container" style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[43.8563, 18.4131]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[43.8563, 18.4131]} />
      </MapContainer>
    </div>
  );
};

export default Map;
