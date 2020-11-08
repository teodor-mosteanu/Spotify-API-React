import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/login/login';
import Homepage from './containers/homepage/homepage';
import { generateRandomString } from './utils/pkce/pkce';
import './App.css';

let verifier = localStorage.getItem('verifier');

const generateVerifier = () => {
  if (!verifier) {
    verifier = generateRandomString();
    localStorage.setItem('verifier', verifier);
  }
};


function App() {
  if (!verifier) {
    generateVerifier();
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
