import { ResultProps } from "../constants/Results";

export const Results: React.FC<{ results: ResultProps[] }> = ({ results }) => {
  return (
    <div>
      {results.map((result, i) => (
        <div key={i}>
          <span>{`${result.prize.name} x ${result.prize.quantity}`}</span>
          <ul>
            {result.winners.map((winner, i) => (
              <li key={i}>{winner.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
