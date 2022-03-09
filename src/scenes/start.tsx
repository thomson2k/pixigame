import React from 'react';
import { Scenes } from '../App';

export default function start(props: any) {
  const handleChange = () => {
    props.changeScene(Scenes.GAME);
  };
  return (
    <div className="card">
      <h1>WELCOME TO GHOST GAME</h1>
      <p>GOAL: CLICK GHOST TO DESTROY AND COLLECT 10 POINTS</p>
      <p>RULES: DON NOT LET THEM TOUCH RED BACKGROUND</p>
      <button onClick={handleChange} className="card__button--start" type="button">START GAME</button>
    </div>
  );
}
