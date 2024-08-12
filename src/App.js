import logo from './logo.svg';
import './App.css';
// import HolaMundo from "./components/HolaMundo";
// import { AdiosMundo } from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {

  // const userName = "Antonio Balam";
  // const edad =26;

  const user = {
    nombre:"antonio balam",
    edad: 26,
    color:"negro"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} />
       
      </header>
    </div>
  );
}

export default App;
