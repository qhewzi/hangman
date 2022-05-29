import React from 'react'
import GameLogo from '../assets/GameLogo.svg';
import HelpButton from '../assets/HelpButton.svg';
import '../assets/css/app.css';
import PlayerButtons from './PlayerButtons'


function Start () {

    return (
        <div className="App">
          <header className="App-display">
            <text className="Title">
              Hangman
            </text>
            <div className="game-container">
          <img src={GameLogo} className="App-logo" alt="logo"/>
          <PlayerButtons />
        </div>
        <img src={HelpButton} className="HelpButton" alt="help=button"/>
        </header>
    </div>
  );
}

export default Start;