const base64URLEncode = (str) => {
  return str.toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
};

const sha256 = (buffer) => {
  return window.crypto.createHash('sha256').update(buffer).digest();
};

export const getVerifier = () => {
  return base64URLEncode(window.crypto.getRandomValues(new Uint32Array(10)));
};

export const getChallenge = (value) => {
  return base64URLEncode(sha256(value));
};
