import GameLogo from './GameLogo.svg';
import HelpButton from './HelpButton.svg';
import './App.css';
import PlayerButtons from './PlayerButtons'

function App() {
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
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
