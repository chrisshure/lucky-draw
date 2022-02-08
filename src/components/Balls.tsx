import classNames from "classnames";
import { useState } from "react";

interface BallProps {
  isDrawn: boolean;
  isDisabled: boolean;
  isSelected: boolean;
  order: number;
  name: string;
  onSelected: (i: number) => void;
}

export const Ball: React.FC<BallProps> = ({
  isDrawn,
  isDisabled,
  isSelected,
  order,
  name,
  onSelected,
}) => {
  const classes = classNames("ball", {
    drawn: isDrawn,
    selected: isSelected,
  });
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDrawn) {
      return;
    }
    if (!isDisabled || isSelected) {
      onSelected(order);
    }
  };

  return (
    <div className="ball-wrapper">
      <button className={classes} onClick={handleClick}>
        {order > -1 && order}
      </button>
    </div>
  );
};

export const Balls: React.FC<{
  max: number;
  people: string[];
  selectedPeople: number[];
  drawnPeople: number[];
  onSelected: (i: number) => void;
}> = ({ max, people, selectedPeople, drawnPeople, onSelected }) => {
  return (
    <div className="balls">
      {people.map((p, i) => (
        <Ball
          key={i}
          isDrawn={drawnPeople.indexOf(i + 1) > -1}
          isDisabled={selectedPeople.length >= max}
          isSelected={selectedPeople.indexOf(i + 1) > -1}
          order={i + 1}
          name={p}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};
