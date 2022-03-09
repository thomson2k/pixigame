import React from 'react'
import { Scenes} from '../App';

export default function lost(props: Scenes) {
  const handleChange = () => {
    props.changeScene(Scenes.START);
  }
  return (
    <div className="lost">
        <h1>GAMEOVER</h1>
        <span>STATS/50</span>
        <button onClick={handleChange}>START AGAIN</button>
    </div>
  )
}
