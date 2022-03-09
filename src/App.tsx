import React, { useState } from 'react';
import './App.scss';
import logo from './img/logo.svg';
import Game from './scenes/game';
import Lost from './scenes/lost';
import Start from './scenes/start';
import Win from './scenes/win';

// eslint-disable-next-line no-unused-vars
export enum Scenes { START, GAME, LOST, WIN }
export interface IProps {
  scene: Scenes;
}

function App() {
  const [currentScene, setCurrentScene] = useState(Scenes.START);

  const onChangeScene = (scene: Scenes) => {
    setCurrentScene(scene);
  };

  const getScene = (scene: Scenes) => {
    switch (scene) {
      case Scenes.START:
        return <Start changeScene={onChangeScene} />;
      case Scenes.GAME:
        return <Game changeScene={onChangeScene} />;
      case Scenes.LOST:
        return <Lost changeScene={onChangeScene} />;
      case Scenes.WIN:
        return <Win changeScene={onChangeScene} />;
      default:
        return <Start changeScene={onChangeScene} />;
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
        <div className="footer__wrapper">
          <p>GHOSTGAME</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
