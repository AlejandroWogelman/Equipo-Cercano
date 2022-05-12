import React from "react";
import { Marker, Popup } from "react-leaflet";
import { equipos } from "../teamsData";

export const MarkersPop = React.memo(() => {
  return (
    <>
      {equipos.map(({ name, coords }) => {
        return (
          <Marker key={name} position={[coords[0], coords[1]]}>
            <Popup>{name}</Popup>
          </Marker>
        );
      })}
    </>
  );
});
