/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as PIXI from 'pixi.js';
import { IGame } from './startGame';

const ENEMY_SPAWN_RATE_IN_MILISECONDS = 2 * 1000;
const ENEMY_MAX_DURATION_IN_MILISECONDS = 10 * 1000;
const GHOST_TOTAL = 29;

export type Enemy = {
  id: string;
  sprite: PIXI.Sprite;
  delete: () => void;
};

export function addRandomEnemies(
  app: PIXI.Application,
  game: IGame,
  setGame: (newGame: IGame) => void,
): { [enemyId: string]: Enemy } {
  const enemies: { [enemyId: string]: Enemy } = {};
  const addEnemy = () => {
    const enemyId = (Math.random() * 1000000).toFixed();
    const enemySprite = PIXI.Sprite.from('sprite.png');

    // Opt-in to interactivity
    enemySprite.interactive = true;
    // Shows hand cursor
    enemySprite.buttonMode = true;
    // create spawn
    const spawn = PIXI.Sprite.from('spawn.png');

    app.stage.addChild(spawn);
    app.stage.addChild(enemySprite);

    const spriteHeightToWidthRatio = enemySprite.height / enemySprite.width;

    enemySprite.width = 50;
    enemySprite.height = 50 * spriteHeightToWidthRatio;
    // start position of sprite
    enemySprite.x = 250;
    enemySprite.y = 250;
    spawn.x = 250;
    spawn.y = 250;

    const moveEnemy = (timeDelta: number) => {
      enemySprite.x += timeDelta;
      enemySprite.y += timeDelta;

      // ghost growing up
      enemySprite.scale.x *= 1.005;
      enemySprite.scale.y *= 1.005;

      if (enemySprite.getBounds().x < 0
      || enemySprite.getBounds().x > 660
      || enemySprite.getBounds().y < 0
      || enemySprite.getBounds().y > 470) {
        setGame({ ...game, loss: true });
      }
    };

    app.ticker.add(moveEnemy);

    let timeoutToClear: NodeJS.Timeout | null;
    const deleteEnemy = () => {
      // eslint-disable-next-line no-param-reassign
      game.numberOfDestroyedEnemies += 1;
      if (game.numberOfDestroyedEnemies) setGame({ ...game });

      app.ticker.remove(moveEnemy);
      app.stage.removeChild(enemySprite);
      delete enemies[enemyId];
      enemySprite.destroy();
      if (timeoutToClear) { clearTimeout(timeoutToClear); }
    };
    const onGhostClick = () => {
      deleteEnemy();
    };
    enemySprite.on('pointerdown', onGhostClick);

    timeoutToClear = setTimeout(
      () => deleteEnemy,
      ENEMY_MAX_DURATION_IN_MILISECONDS,
    );
    enemies[enemyId] = {
      id: enemyId,
      sprite: enemySprite,
      delete: deleteEnemy,
    };
  };

  const setIntervalX = (callback:any, delay:number, repetitions:number) => {
    let x = 0;
    const intervalID = window.setInterval(() => {
      callback();

      if (++x === repetitions) {
        window.clearInterval(intervalID);
      }
    }, delay);
  };
  setIntervalX(() => {
    addEnemy();
  }, ENEMY_SPAWN_RATE_IN_MILISECONDS, GHOST_TOTAL);

  return enemies;
}
