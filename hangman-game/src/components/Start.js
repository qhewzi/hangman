import React from 'react'
import GameLogo from '../assets/GameLogo.svg';
import '../assets/css/app.css';
import PlayerButtons from './PlayerButtons'


function Start () {

    return (
      <div className="App">
        <text className="Title">
          Hangman
        </text>
        <PlayerButtons/>
        <img src={GameLogo} className="App-logo" alt="logo"/>
    </div>
  );
}

export default Start;