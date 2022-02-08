import { useState } from "react";
import "./App.css";
import { Balls } from "./components/Balls";
import { Results } from "./components/Results";
import { SelectPeople } from "./components/SelectPeople";
import { People } from "./constants/People";
import { Prizes } from "./constants/Prizes";
import { ResultProps } from "./constants/Results";
import { shuffleArray } from "./utilities/array";

function App() {
  const [people, setPeople] = useState(People);
  const [currentPrize, setCurrentPrize] = useState(Prizes[0]);
  const [selectedPeople, selectPeople] = useState<number[]>([]);
  const [drawnPeople, setDrawnPeople] = useState<number[]>([]);
  const [results, setResults] = useState<ResultProps[]>([]);

  const selectingPeople = (i: number) => {
    if (selectedPeople.find((p) => p === i)) {
      // removing selected people
      selectPeople(selectedPeople.filter((p) => p !== i));
    } else {
      // add people index to state
      selectPeople([...selectedPeople, i]);
    }
  };

  const confirmingPeople = () => {
    setDrawnPeople([...drawnPeople, ...selectedPeople]);
    const winners = selectedPeople.map((p) => {
      return {
        number: p,
        name: People[p - 1],
      };
    });
    setResults([...results, { prize: currentPrize, winners: winners }]);
  };

  const goingNextPrize = () => {
    setCurrentPrize(Prizes[Prizes.indexOf(currentPrize) + 1]);
    selectPeople([]);
  };

  const handleReset = () => {
    setPeople(shuffleArray(people));
    selectPeople([]);
    setDrawnPeople([]);
    setResults([]);
    setCurrentPrize(Prizes[0]);
  };

  return (
    <div className="App">
      <header className="App-header">Shure 2022 Lucky Draw</header>
      <div className="App-body">
        <div className="left-column">
          <Balls
            people={people}
            max={currentPrize.quantity}
            selectedPeople={selectedPeople}
            drawnPeople={drawnPeople}
            onSelected={selectingPeople}
          />
        </div>
        <div className="right-column">
          <SelectPeople
            people={people}
            currentPrize={currentPrize}
            selectedPeople={selectedPeople}
            confirmPeople={confirmingPeople}
            nextPrize={goingNextPrize}
          />
        </div>
      </div>
      <footer className="App-footer">
        <Results results={results} />
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </footer>
    </div>
  );
}

export default App;
