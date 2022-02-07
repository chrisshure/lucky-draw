import { useState } from "react";
import "./App.css";
import { Balls } from "./components/Balls";
import { SelectPeople } from "./components/SelectPeople";
import { Prizes } from "./constants/Prizes";

function App() {
  const [currentPrize, setCurrentPrize] = useState(Prizes[0]);
  const [selectedPeople, selectPeople] = useState<number[]>([]);
  const [drawnPeople, setDrawnPeople] = useState<number[]>([]);
  // const prize = Prizes[currentPrize];
  return (
    <div className="App">
      <header className="App-header">Shure 2022 Lucky Draw</header>
      <div className="App-body">
        <div className="left-column">
          <Balls
            max={currentPrize.quantity}
            selectedPeople={selectedPeople}
            drawnPeople={drawnPeople}
            onSelected={(i) => {
              if (selectedPeople.find((p) => p === i)) {
                selectPeople(selectedPeople.filter((p) => p !== i));
              } else {
                selectPeople([...selectedPeople, i]);
              }
            }}
          />
        </div>
        <div className="right-column">
          <SelectPeople
            currentPrize={currentPrize}
            selectedPeople={selectedPeople}
            confirmPeople={() => {
              setDrawnPeople([...drawnPeople, ...selectedPeople]);
            }}
            nextPrize={() => {
              setCurrentPrize(Prizes[Prizes.indexOf(currentPrize) + 1]);
              selectPeople([]);
            }}
          />
        </div>
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
