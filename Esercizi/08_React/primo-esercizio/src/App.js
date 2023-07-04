import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Contatti from './components/Contatti';
import Progetti from './components/Progetti';
import Competenze from './components/Competenze';
import Login from './components/Login';



function App() {
  return (
    <div>
      <Header/>
      <Bio/>
      <Contatti/>
      <Progetti/>
      <Competenze/>
      <Login/>

    </div>
  );
}

export default App;
