import { PrizeProps } from "./Prizes";

export interface ResultProps {
  prize: PrizeProps;
  winners: {
    number: number;
    name: string;
  }[]
}