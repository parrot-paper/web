import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  async function callExpress() {
    try {
      const response = await fetch('/api/test').then(res => res.json());
      setMessage(response.message);
    } catch (err) {}
  }

  callExpress();
  return (
    <div className="App">{message ? <h1>{message}</h1> : <h1>LOADING</h1>}</div>
  );
};

export default App;
