
import './App.css';
import React from 'react'

import useApi from './hooks/useApi';
import SignIn from './components/Signin';
function App() {
  const { httpHandle } = useApi();

  React.useEffect(() => {
    httpHandle('posts', 'http-post', {}).then(response => {
      console.log(response)
    })

  });
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
