import Player from './components/Player.jsx';
import TimeChallege from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallege title="Easy"  targetTime={1} />
        <TimeChallege title="Medium"  targetTime={5} />
        <TimeChallege title="Hard"  targetTime={10} />
        <TimeChallege title="Pros Only"  targetTime={15} />
      </div>
    </>
  );
}

export default App;
