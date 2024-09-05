import React from 'react';
import './App.css';
import {HeronWater} from './heronwater';
import { Button } from './components/Button/Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={HeronWater.alertLalal}>Нами</button>
        <Button name={'Название'} onClick={() => {
          alert('dfkfdjgjfdigjfdlg')
        }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
