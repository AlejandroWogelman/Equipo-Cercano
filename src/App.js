import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";

import { Input } from "./components/Input";

import { ResultsSearch } from "./components/ResultsSearch";

import { ViewMap } from "./components/ViewMap";

function App() {
  const state = useSelector((state) => state.search.distance);

  return (
    <div className="App">
      <header>
        <h1>TU EQUIPO DE PRIMERA MÁS CERCANO</h1>
      </header>
      <Input />
      <ResultsSearch />
      <div className="distance">
        {state.distance < 50000 && (
          <h2>
            Estás a {Math.round(state.distance)}Km de {state.name}
          </h2>
        )}
      </div>
      <ViewMap />
    </div>
  );
}

export default App;
