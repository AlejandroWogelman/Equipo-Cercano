import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetching } from "../Redux/reducers/searchReducer";

export const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetching(value));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Busque y Presione "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-info" type="submit">
        Buscar
      </button>
    </form>
  );
};
