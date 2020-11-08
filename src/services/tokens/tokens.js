import { CLIENT_ID } from '../../constants/app';

export function getToken(code, redirectUri, codeVerifier) {
  // eslint-disable-next-line
  const body = `client_id=${CLIENT_ID}&grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&code_verifier=${codeVerifier}`;

  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
