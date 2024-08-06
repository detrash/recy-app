import React from 'react';
import ReactDOM from 'react-dom/client';

import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/providers';

import { App } from './app';

import './styles/globals.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
      <Toaster />
    </Providers>
  </React.StrictMode>,
);
