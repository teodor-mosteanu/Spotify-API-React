import React, { useEffect } from 'react';
import { getToken } from '../../services/tokens/tokens';
import { getUser } from '../../services/user/user';
import { REDIRECT_URI } from '../../constants/app';


//  to do : display user picture + name

function Homepage() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  const error = urlParams.get('error');
  const state = urlParams.get('state');
  const codeVerifier = localStorage.getItem('pkce_code_verifier');

  useEffect(async () => {
    const {
      data: {
        token_type: tokenType,
        access_token: accessToken,
      }} = await getToken(code, REDIRECT_URI, codeVerifier);
    console.log(tokenType, accessToken);
    const userData = await getUser(tokenType, accessToken);
    console.log(userData.data);
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
