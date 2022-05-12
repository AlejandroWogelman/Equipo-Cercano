import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    election: [],
    electionCoords: [],
    distance: { name: "", distance: 50000 },
  },
  reducers: {
    setResults: (state, action) => {
      state.electionCoords = action.payload;
    },
    changeSelect: (state, action) => {
      state.election = action.payload;
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
  },
});
export const { setResults, changeSelect, setDistance } = searchSlice.actions;

export const fetching = (param) => (dispatch) => {
  axios
    .get(
      `https://api.opencagedata.com/geocode/v1/json?q=${param}&key=99ed5c3fe43247ac84f340d9f0cdc0fd&limit=4`
    )
    .then((response) => {
      dispatch(setResults(response.data.results));
    })
    .catch((e) => console.log(e));
};
export const changeSelection = (data) => (dispatch) => {
  dispatch(changeSelect(data));
};
export const changeDistance = (data) => (dispatch) => {
  dispatch(setDistance(data));
};

export default searchSlice.reducer;
