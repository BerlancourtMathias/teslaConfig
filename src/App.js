import "./App.css";
import { useState } from "react";

const App = () => {
  const [performance, setPerformance] = useState(0);
  const [colorBlack, setColorBlack] = useState(0);
  let result = 90700;

  return (
    <div className="body">
      <h1>Tesla Config</h1>
      <div className="container">
        <div className="column1">
          <h2>Sélectionnez votre Véhicule</h2>
          <button
            onClick={() => {
              setPerformance(0);
            }}
          >
            Grande autonomie - 90 700 €
          </button>
          <button
            onClick={() => {
              setPerformance(1);
            }}
          >
            Performance - 106 700 €
          </button>
        </div>
        <div className="column2">
          <h2>Sélectionnez la couleur</h2>
          <button
            onClick={() => {
              setColorBlack(0);
            }}
          >
            Blanc nacré multicouhces - 0 €
          </button>
          <button
            onClick={() => {
              setColorBlack(1);
            }}
          >
            Noir uni - 1000 €
          </button>
        </div>
        <div className="calc">
          {performance ? (
            <div>{(result += 16000)} </div>
          ) : (
            <div> {(result = 90700)}</div>
          )}
          {colorBlack ? (
            <div>{(result += 1000)}</div>
          ) : (
            <div>{(result += 0)}</div>
          )}
        </div>
        <div className="result">{result}</div>
      </div>
      <footer></footer>
    </div>
  );
};

export default App;
