/* eslint-disable */
import {
  useEffect, useRef, useState,
} from 'react';
import * as PIXI from 'pixi.js';
import { Scenes } from '../App';
import { IGame, startGame } from './Game/startGame';

const NUMBER_OF_ENEMIES_TO_DESTROY = 10;

export default function game(props: any) {
  const domRef = useRef<HTMLDivElement | null>(null);
  const [game, setGame] = useState<IGame | undefined>(undefined);

  let ratio = window.devicePixelRatio || 1;
  let w = screen.width * ratio;
  useEffect(() => {
    let pixiApp;

    if(w > 1400) {
      pixiApp = new PIXI.Application({ width: 1000, height: 600 });
    } else {
      pixiApp = new PIXI.Application({ resizeTo: window });
    }
    domRef.current?.appendChild(pixiApp.view);
    startGame(pixiApp, setGame);
  }, []);
  const handleChange = (resFlag: Scenes) => {
    props.changeScene(resFlag);
  };
  const numberOfDestroyedEnemies = game?.numberOfDestroyedEnemies || 0;

  if (numberOfDestroyedEnemies >= NUMBER_OF_ENEMIES_TO_DESTROY) handleChange(Scenes.WIN);
  if (game?.loss) handleChange(Scenes.LOST);

  return (
    <div>
      <h1>
        {numberOfDestroyedEnemies}
        /
        {NUMBER_OF_ENEMIES_TO_DESTROY}
      </h1>
      <div ref={domRef} />
    </div>
  );
}
