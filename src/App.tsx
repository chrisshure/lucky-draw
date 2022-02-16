import { useEffect, useState } from "react";
import "./App.css";
import ImageMasonry from "react-image-masonry";

import { Balls } from "./components/Balls";
import { Passcode } from "./components/Passcode";
import { Results } from "./components/Results";
import { SelectPeople } from "./components/SelectPeople";
import { People } from "./constants/People";
import { Prizes } from "./constants/Prizes";
import { ResultProps } from "./constants/Results";
import { shuffleArray } from "./utilities/array";
import fetch from "./utilities/fetch";

function App() {
  const [isPassed, setPass] = useState(false);
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
    const drawn = [...drawnPeople, ...selectedPeople];
    const winners = selectedPeople.map((p) => {
      return {
        number: p,
        name: people[p - 1]
      };
    });
    const res = [...results, { prize: currentPrize, winners: winners }];
    setDrawnPeople(drawn);
    setResults(res);

    fetch.saveData({
      people: people,
      results: res,
      drawnPeople: drawn,
      current: Prizes.indexOf(currentPrize) + 1
    });
  };

  const goingNextPrize = () => {
    setCurrentPrize(Prizes[Prizes.indexOf(currentPrize) + 1]);
    selectPeople([]);
  };

  const handleReset = () => {
    const shuffledPeople = shuffleArray(people);
    setPeople(shuffledPeople);
    selectPeople([]);
    setDrawnPeople([]);
    setResults([]);
    setCurrentPrize(Prizes[0]);

    fetch.saveData({
      people: shuffledPeople,
      results: [],
      drawnPeople: [],
      current: 0
    });
  };

  const started = () => {
    fetch.getData((data) => {
      console.log(data);
      if (data.results.length) {
        setPeople(data.people);
        setResults(data.results);
        setDrawnPeople(data.drawnPeople);
        setCurrentPrize(Prizes[data.current]);
      } else {
        handleReset();
      }
    });
  };

  const exportData = (data: any) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div className="App">
      {!isPassed ? (
        <>
          <div className="masonry-container">
            <ImageMasonry numCols={6} animate={true} forceOrder={true}>
              {Prizes.filter((p) => p.inMasonry !== false).map((prize, i) => (
                <div className="masonry-img-wrapper" key={i}>
                  <img
                    className="masonry-img"
                    src={prize.imgSrc}
                    alt={prize.name}
                    title={prize.name}
                  />
                  <div className="masonry-img-info">
                    {prize.brand}
                    <br />
                    {prize.name}
                  </div>
                </div>
              ))}
            </ImageMasonry>
          </div>

          <Passcode
            updatePass={(v) => {
              setPass(v);
              started();
            }}
          />
        </>
      ) : (
        <>
          <header className="App-header">
            <img
              className="logo"
              src="https://www.shure.com/packs/media/images/shure_branding_clean-5f036c9a.svg"
              alt="Shure"
            />
            Shure (Hong Kong) {new Date().getFullYear()} Lucky Draw
          </header>
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
            <div className="button-container">
              <button className="button" onClick={handleReset}>
                Reset
              </button>
              <button className="button" onClick={() => exportData(results)}>
                Export Data
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
