import React, { useEffect } from 'react';
import { getToken } from '../../services/tokens/tokens';
import { REDIRECT_URI } from '../../constants/app';

function Homepage() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const error = urlParams.get('error');
  const state = urlParams.get('state');
  const codeVerifier = localStorage.getItem('pkce_code_verifier');

  useEffect(async () => {
    const response = await getToken(code, REDIRECT_URI, codeVerifier);
    console.log('response', response);
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      {error && (
        <>
          <h2>{error}</h2>
          <h3>{state}</h3>
        </>
      )}
    </>
  );
}

export default Homepage;
