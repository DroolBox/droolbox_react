
/* eslint-disable no-console */

import decode from 'jwt-decode';

import { TOKEN, REFRESH_TOKEN } from '../constants';

export const checkAuth = () => {
  const token = localStorage.getItem(TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  if (!token || !refreshToken) {
    return false;
  }

  try {
    const decodedToken = decode(refreshToken);

    if (decodedToken.exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

export const handleLogout = history => {
  localStorage.removeItem(TOKEN);
  history.push('/');
};
