import Players from './Players';
import SongForm from './SongForm';
import SongList from './SongList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:"center"}}>The worst playlist ever</h1>
      </header>
        <Players/>
        <SongForm/>
        <SongList/>

    </div>
  );
}

export default App;
