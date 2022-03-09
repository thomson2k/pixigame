import React from 'react';
import { Scenes } from '../App';

export default function start( props: Scenes ) {
  const handleChange = (event: Scenes) => {
    props.changeScene(Scenes.GAME);
  }
  return (
    <div>
      <h1>WELCOME TO GHOST GAME</h1>
      <p>GOAL: CLICK GHOST TO KILL THEM</p>
      <p>RULES: DON'T LET GHOST ESCAPE GRAY BACKGROUND</p>
      <button onClick={handleChange}>START GAME</button>
    </div>
  );
}
