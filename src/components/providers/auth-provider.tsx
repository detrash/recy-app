import { Auth0Provider } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN as string}
      clientId={process.env.AUTH0_CLIENT_ID as string}
      // redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
}
