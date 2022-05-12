import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelection } from "../Redux/reducers/searchReducer";

export const ResultsSearch = () => {
  const [moreResults, setMoreResults] = useState(false);
  const state = useSelector((state) => state.search.electionCoords);
  const dispatch = useDispatch();

  function handleClick({ lat, lng }) {
    /* changeElection(lat, lng); */
    dispatch(changeSelection([lat, lng]));
  }

  return (
    <div className="results-container ">
      {state.length > 0 && (
        <>
          <div className="list-group">
            <p
              className="list-group-item"
              onClick={() => handleClick(state[0].geometry)}
            >
              {state[0].formatted}
            </p>
            {moreResults &&
              state.map(({ formatted, geometry }, index) => {
                if (index > 0) {
                  return (
                    <p
                      className="list-group-item"
                      onClick={() => handleClick(geometry)}
                      key={geometry.lat}
                    >
                      {formatted}
                    </p>
                  );
                }
              })}
          </div>
          <button
            className={"btn btn-outline-secondary"}
            type="button"
            onClick={() => setMoreResults(!moreResults)}
          >
            {moreResults ? "Ver menos" : "Ver más"}
          </button>
        </>
      )}
    </div>
  );
};
