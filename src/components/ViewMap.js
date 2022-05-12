import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { Distance } from "./Distance";
import { MarkersPop } from "./Markers";
import { equipos } from "../teamsData";

export const ViewMap = React.memo(() => {
  return (
    <>
      <MapContainer
        zoomAnimation="true"
        className="map-container"
        center={[-34.61315, -58.37723]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Distance />
        <MarkersPop />
      </MapContainer>
    </>
  );
});
