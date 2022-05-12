import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { changeDistance } from "../Redux/reducers/searchReducer";

import { equipos } from "../teamsData";

export const Distance = () => {
  const map = useMap();
  const state = useSelector((state) => state.search.election);

  const dispatch = useDispatch();

  const result = equipos.reduce(
    (acc, el) => {
      if (state.length < 1) return acc;
      const distancia = map.distance(el.coords, state) / 1000;

      if (distancia < acc.distance) {
        return {
          name: el.name,
          distance: distancia,
        };
      } else {
        return acc;
      }
    },
    { name: "", distance: 50000 }
  );

  useEffect(() => {
    dispatch(changeDistance(result));
  }, [result]);

  return null;
};
