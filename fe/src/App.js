import logo from './logo.svg';
import './App.css';
import React from 'react'

import useApi from './hooks/useApi';

function App() {
  const { httpHandle } = useApi();
  React.useEffect(() => {
    httpHandle('posts', 'http-post', {}).then(response => {
      console.log(response)
    })


  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
