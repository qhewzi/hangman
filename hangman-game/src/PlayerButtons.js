import React from 'react';
import './App.css';
import SingleplayerButton from './SingleplayerButton.svg';
import MultiplayerButton from './MultiplayerButton.svg';
import PlayButton from './PlayButton.svg';

const PlayerButtons = () => (
    <div className="PlayerButtons">
        <div className='row'>
            <img src={PlayButton} className="PlayButton" alt="play-button"/>
        </div>
        <div className='row'>
            <img src={SingleplayerButton} className="SingleplayerButton" alt="singleplayer-button"/>
        </div>
        <div className='row'>
            <img src={MultiplayerButton} className="MultiplayerButton" alt="multiplayer-button"/>
        </div>
    </div>
)

export default PlayerButtons;