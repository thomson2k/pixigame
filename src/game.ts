import * as PIXI from 'pixi.js';

export type Game = {
  numberOfDestroyedEnemies: number;
};

export function startGame(
  app: PIXI.Application,
  setGame: (newGame: Game) => void
): Game {
  const game: Game = { numberOfDestroyedEnemies: 0 };

  return game;
}
