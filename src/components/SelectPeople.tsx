import React from "react";
import { Prizes, PrizeProps } from "../constants/Prizes";

const Prize: React.FC<PrizeProps> = ({ name, quantity }) => {
  return (
    <div className="prize">
      <div className="prize-name">{name}</div>
      <div className="prize-quantity">{quantity}</div>
    </div>
  );
};

const makeEmptyArray = (quantity: number) => {
  let a = [];
  for (let i = 0; i < quantity; i++) {
    a.push(-1);
  }
  return a;
};

export const SelectPeople: React.FC<{
  currentPrize: PrizeProps;
  selectedPeople: number[];
  confirmPeople: () => void;
  nextPrize: () => void;
}> = ({ currentPrize, selectedPeople, confirmPeople, nextPrize }) => {
  const handleConfirm = () => confirmPeople();
  const handleNext = () => {
    if (currentPrize !== Prizes[Prizes.length - 1]) {
      nextPrize();
    }
  };
  return (
    <div>
      <Prize name={currentPrize.name} quantity={currentPrize.quantity} />

      <div className="selected-space-container">
        {makeEmptyArray(currentPrize.quantity).map((q, i) => (
          <div className="selected-space" key={i}>
            {selectedPeople[i]}
          </div>
        ))}
      </div>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
