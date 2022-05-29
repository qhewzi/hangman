import React from 'react';
import '../assets/css/app.css';
import SingleplayerButton from '../assets/SingleplayerButton.svg';
import MultiplayerButton from '../assets/MultiplayerButton.svg';
import PlayButton from '../assets/PlayButton.svg';
import { useHistory } from "react-router-dom";

function PlayerButtons () {
    let history = useHistory();

    function handleClick() {
      history.push("/game");
    }
    return (
    <div className="PlayerButtons">
        <div className='row'>
            <img src={PlayButton} className="PlayButton" onClick={handleClick} alt="play-button"/>
        </div>
        <div className='row'>
            <img src={SingleplayerButton} className="SingleplayerButton" alt="singleplayer-button"/>
        </div>
        <div className='row'>
            <img src={MultiplayerButton} className="MultiplayerButton" alt="multiplayer-button"/>
        </div>
    </div>
    );
}

export default PlayerButtons;