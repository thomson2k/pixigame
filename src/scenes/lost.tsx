import React from 'react';
import { Scenes } from '../App';

export default function lost(props: any) {
  const handleChange = () => {
    props.changeScene(Scenes.START);
  };
  return (
    <div className="card">
      <h1>GAMEOVER</h1>
      <button onClick={handleChange} className="card__button--start" type="button">START AGAIN</button>
    </div>
  );
}
