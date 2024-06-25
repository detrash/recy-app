import { withAuth0, WithAuth0Props, withAuthenticationRequired } from '@auth0/auth0-react';
import SumsubWebSdk from '@sumsub/websdk-react';

import { getSDKAccessToken } from '@/api';

function KYC(props: WithAuth0Props) {
  return (
    <>
      <SumsubWebSdk
        accessToken="x"
        testEnv={import.meta.env.NEXT_PUBLIC_SUMSUB_ENV === 'sandbox'}
        onError={(error) => console.error(error)}
        expirationHandler={() => getSDKAccessToken(props)}
        options={{ debug: true }}
      />
    </>
  );
}

export default withAuthenticationRequired(withAuth0(KYC));
