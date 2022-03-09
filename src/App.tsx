import React, { useState } from 'react';
import './App.scss';
import logo from './img/logo.svg';
import Game from './scenes/game';
import Lost from './scenes/lost';
import Start from './scenes/start';
import Win from './scenes/win';

export enum Scenes { START, GAME, LOST, WIN }
export interface IProps {
  scene: Scenes;
}

function App() {
  const [currentScene, setCurrentScene] = useState(Scenes.START);

  const onChangeScene = (scene: Scenes) => {
    setCurrentScene(scene);
  }
  const getScene = (scene: Scenes) => {
    switch (scene) {
      case Scenes.START:
        return <Start changeScene={onChangeScene} />;
      case Scenes.GAME:
        return <Game />;
      case Scenes.LOST:
        return <Lost changeScene={onChangeScene} />;
      case Scenes.WIN:
        return <Win changeScene={onChangeScene} />;
      default:
        return <Win />;
    }
  };
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        { getScene(currentScene) }
      </main>
      <footer>
        <p>STOPKA GAME</p>
      </footer>
    </div>
  );
}

export default App;