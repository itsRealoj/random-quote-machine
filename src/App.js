import React from 'react';
import './App.css';
import RandomQuote from './component/RandomQuote';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        Random Quote Machine
        <RandomQuote />
      </header>
    </div>
  );
}

export default App;
