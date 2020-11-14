import React, { useState, useEffect } from 'react';
import { generateRandomString, getChallenge } from '../../utils/pkce/pkce';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI } from '../../constants/app';

/*
  TODO: strongly recommended to add state parameter to the url
  (check Spotify API to see what state to set)
*/
// const getLoginUrl = (codeChallenge) => `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&code_challenge_method=S256&code_challenge=${codeChallenge}&state=user_follow_modify`;

export default function Login() {
  const [url, setUrl] = useState();

  useEffect(async () => {
    // Create and store a random "state" value
    const state = generateRandomString();
    localStorage.setItem('pkce_state', state);

    // Create and store a new PKCE code_verifier (the plaintext random secret)
    const codeVerifier = generateRandomString();
    localStorage.setItem('pkce_code_verifier', codeVerifier);

    // Hash and base64-urlencode the secret to use as the challenge
    const codeChallenge = await getChallenge(codeVerifier);

    console.log('codeChallenge', codeChallenge);

    // Build the authorization URL
    const url = AUTH_ENDPOINT +
    '?response_type=code' +
    '&client_id=' + encodeURIComponent(CLIENT_ID) +
    '&state=' + encodeURIComponent(state) +
    // '&scope=' + encodeURIComponent(config.requested_scopes) +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
    '&code_challenge=' + encodeURIComponent(codeChallenge) +
    '&code_challenge_method=S256';

    setUrl(url);
  }, []);

  const onClickHandler = () => {
    // Redirect to the authorization server
    window.location = url;
  };

  return (
    <div>
      <h1>Login page</h1>
      {url && <button onClick={onClickHandler}>Log in</button>}
    </div>
  );
};
