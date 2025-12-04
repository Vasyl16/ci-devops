import { useState } from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="app">
      <h1>CI Lab React App</h1>
      <Greeting name={name} />
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name-input"
        />
      </div>
      <Counter />
    </div>
  );
}

export default App;
