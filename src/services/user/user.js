import Axios from 'axios';

export function getUser(tokenType, token) {
  const authorization = `${tokenType} ${token}`;
  console.log('authorization', authorization);
  return Axios.get(
      'https://api.spotify.com/v1/me',
      {
        headers: {
          'Authorization': authorization,
        },
      },
  );
}
