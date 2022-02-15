import carro1 from './carro1.jpeg';
import carro2 from './carro2.jpeg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> iniciando a corrida !!! </h1>    
        <img src={carro1} className="carro1" alt="carro1" />
        <img src={carro2} className="carro2" alt="carro2" />
        <button className="start-race-btn" >start</button>
      </header>
    </div>
  );
}

export default App;
