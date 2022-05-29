import React from 'react';
import '../assets/css/app.css';
import PlayButton from '../assets/PlayButton.svg';
import { useHistory } from "react-router-dom";

function PlayerButtons () {
    let history = useHistory();

    function handleClick() {
      history.push("/game");
    }
    return (
        <img src={PlayButton} className="PlayButton" onClick={handleClick} alt="play-button"/>
    );
}

export default PlayerButtons;