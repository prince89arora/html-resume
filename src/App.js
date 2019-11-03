import React from 'react';
import Header from './components/header/header'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Profile from './components/sections/profile/profile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Profile></Profile>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
