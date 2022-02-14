import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Prizes, PrizeProps } from "../constants/Prizes";
import { makeEmptyArray } from "../utilities/array";
import { Ball } from "./Balls";

const Prize: React.FC<PrizeProps> = ({ brand, name, quantity, imgSrc }) => {
  return (
    <div className="prize">
      {imgSrc && <img className="prize-img" src={imgSrc} alt={name} />}
      <div className="prize-brand">{brand}</div>
      <div className="prize-name">{name}</div>
      <div className="prize-quantity">x{quantity}</div>
    </div>
  );
};

export const SelectPeople: React.FC<{
  people: string[];
  currentPrize: PrizeProps;
  selectedPeople: number[];
  confirmPeople: () => void;
  nextPrize: () => void;
}> = ({ people, currentPrize, selectedPeople, confirmPeople, nextPrize }) => {
  const [isConfirmed, setConfirmed] = useState(
    selectedPeople.length === currentPrize.quantity
  );
  const handleConfirm = () => {
    if (selectedPeople.length === currentPrize.quantity) {
      setConfirmed(true);
      confirmPeople();
    }
  };
  const handleNext = () => {
    if (currentPrize !== Prizes[Prizes.length - 1]) {
      setConfirmed(false);
      nextPrize();
    }
  };

  useEffect(() => {
    if (selectedPeople.length === 0) {
      setConfirmed(false);
    }
  }, [selectedPeople]);

  return (
    <div className="right-content">
      <div className="page">{`${Prizes.indexOf(currentPrize) + 1} of ${
        Prizes.length
      }`}</div>
      <Prize
        brand={currentPrize.brand}
        name={currentPrize.name}
        quantity={currentPrize.quantity}
        imgSrc={currentPrize.imgSrc}
      />

      <div className="selected-space-container">
        {makeEmptyArray(currentPrize.quantity).map((q, i) => {
          const number = selectedPeople[i] ? selectedPeople[i] : -1;
          const name = selectedPeople[i] ? people[selectedPeople[i] - 1] : "";
          return (
            <div className="selected-ball-container" key={i}>
              <div
                className={classNames(
                  "selected-ball-wrapper",
                  isConfirmed && "confirmed"
                )}
              >
                <Ball
                  classnames={classNames(number > 0 && "selected")}
                  isDisabled={true}
                  isDrawn={false}
                  isSelected={false}
                  order={number}
                  name={name}
                  onSelected={() => {}}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        {selectedPeople.length === currentPrize.quantity && !isConfirmed && (
          <button className="button" onClick={handleConfirm}>
            Confirm
          </button>
        )}
        {selectedPeople.length === currentPrize.quantity && isConfirmed && (
          <button className="button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
