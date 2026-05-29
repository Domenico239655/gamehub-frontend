import { Game } from "./game";

export interface Tournament {
  id: number;
  title: string;
  date: string; // o Date se preferisci
  participantsCount: number;
  game: Game;   // <-- OGGETTO, NON STRINGA
}