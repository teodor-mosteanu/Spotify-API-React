import { CLIENT_ID } from '../../constants/app';
import axios from 'axios';

export function getToken(code, redirectUri, codeVerifier) {
  // eslint-disable-next-line
  const data = `client_id=${CLIENT_ID}&grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}&code_verifier=${codeVerifier}`;

  return axios.post('https://accounts.spotify.com/api/token',
      data,
      {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
  );
};
