import SumsubWebSdk from '@sumsub/websdk-react';

import { getSDKAccessToken } from '@/api';

export default function KYC() {
  return (
    <>
      <SumsubWebSdk
        accessToken="x"
        testEnv={import.meta.env.NEXT_PUBLIC_SUMSUB_ENV === 'sandbox'}
        onError={(error) => console.error(error)}
        expirationHandler={getSDKAccessToken}
        options={{ debug: true }}
      />
    </>
  );
}
