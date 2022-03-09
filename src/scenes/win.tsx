import React from 'react';
import { Scenes } from '../App';

export default function win(props:any) {
  const handleChange = () => {
    props.changeScene(Scenes.START);
  };
  return (
    <div className="card">
      <h1 className="card__heading">YOU WIN</h1>
      <button type="button" className="card__button--start" onClick={handleChange}>start again</button>
    </div>
  );
}
