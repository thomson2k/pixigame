import * as PIXI from 'pixi.js';
import { Enemy, addRandomEnemies } from './enemies';

export type IGame = {
  numberOfDestroyedEnemies: number;
  loss: Boolean;
};

export function startGame(
  app: PIXI.Application,
  // eslint-disable-next-line no-unused-vars
  setGame: (newGame: IGame) => void,
): IGame {
  const game: IGame = {
    numberOfDestroyedEnemies: 0,
    loss: false,
  };

  // eslint-disable-next-line no-unused-vars
  const enemies: { [enemyId: string]: Enemy } = addRandomEnemies(app, game, setGame);
  return game;
}
