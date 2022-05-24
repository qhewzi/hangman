import GameLogo from './GameLogo.svg';
import SingleplayerButton from './SingleplayerButton.svg';
import MultiplayerButton from './MultiplayerButton.svg';
import PlayButton from './PlayButton.svg';
import HelpButton from './HelpButton.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-display">
        <text className="Title">
          Hangman
        </text>
        <img src={GameLogo} className="App-logo" alt="logo"/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="PlayerButtons">
          <img src={SingleplayerButton} className="SingleplayerButton" alt="singleplayer-button"/>
          <img src={MultiplayerButton} className="MultiplayerButton" alt="multiplayer-button"/>
        </div>
        <img src={PlayButton} className="PlayButton" alt="play-button"/>
        <img src={HelpButton} className="HelpButton" alt="help=button"/>
      </header>
    </div>
  );
}

export default App;
