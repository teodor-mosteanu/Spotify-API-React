import React from 'react';
import {getVerifier, getChallenge} from './utils/pkce/pkce';
import './App.css';

// const logInUrl = 'https://accounts.spotify.com/authorize?client_id=a7e8d0a4fb0b41f6809e0c27cfe3c0f8&response_type=code&redirect_uri=http://localhost:3000/homepage&code_challenge_method=S256';

function App() {
  const verifier = getVerifier();
  const challenge = getChallenge(verifier);
  console.log(verifier, challenge);

  return (
    <div>
      <button>Log in</button>
    </div>
  );
}

export default App;
