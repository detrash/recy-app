import { PropsWithChildren } from "react";
import { Web3ModalProvider } from "./web3-modal-provider";
import { AuthProvider } from "./auth-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <Web3ModalProvider>{children}</Web3ModalProvider>
    </AuthProvider>
  );
}
