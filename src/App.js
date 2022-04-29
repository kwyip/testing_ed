import logo from './logo.svg';
import moon from './moon.png';
import edwinstarr from './edwinstarr.jpg';
import edwinstarrsong from './edwinstarrwar.mp3';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={edwinstarr} className="App-logo" alt="logo" />
        {
          <ReactAudioPlayer
          src={edwinstarrsong}
          autoPlay
          controls
          />
        /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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
