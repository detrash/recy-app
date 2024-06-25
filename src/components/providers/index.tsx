import { PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';

// import { messages } from '@/locales/config';
import { AuthProvider } from './auth-provider';
import { Web3ModalProvider } from './web3-modal-provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <IntlProvider locale={navigator.language} defaultLocale="en">
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </IntlProvider>
    </AuthProvider>
  );
}
