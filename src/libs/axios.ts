import { Auth0ContextInterface } from '@auth0/auth0-react';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
  if (config.fetchOptions?.auth0) {
    const auth0 = config.fetchOptions.auth0 as Auth0ContextInterface;

    const { id_token: idToken } = await auth0.getAccessTokenSilently({ detailedResponse: true });

    config.headers.Authorization = `Bearer ${idToken}`;
  }

  return config;
});
