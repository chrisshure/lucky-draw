import classNames from "classnames";
import { useState } from "react";
import { People } from "../constants/People";

interface BallProps {
  isDrawn: boolean;
  isDisabled: boolean;
  order: number;
  name: string;
  onSelected: (i: number) => void;
}

export const Ball: React.FC<BallProps> = ({
  isDrawn,
  isDisabled,
  order,
  name,
  onSelected,
}) => {
  const [selected, setSelected] = useState(false);
  const classes = classNames("ball", {
    drawn: isDrawn,
    selected: selected,
  });
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDrawn) {
      return;
    }
    if (!isDisabled || selected) {
      setSelected(!selected);
      onSelected(order - 1);
    }
  };

  return (
    <div className="ball-wrapper">
      <button className={classes} onClick={handleClick}>
        {order}
      </button>
    </div>
  );
};

export const Balls: React.FC<{
  max: number;
  selectedPeople: number[];
  drawnPeople: number[];
  onSelected: (i: number) => void;
}> = ({ max, selectedPeople, drawnPeople, onSelected }) => {
  return (
    <div className="balls">
      {People.map((p, i) => (
        <Ball
          key={i}
          isDrawn={drawnPeople.indexOf(i) > -1}
          isDisabled={selectedPeople.length >= max}
          order={i + 1}
          name={p}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};
