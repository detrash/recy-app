import { WithAuth0Props } from '@auth0/auth0-react';

import { api } from './axios';

export interface GetSDKAccessTokenParameters extends WithAuth0Props {
  levelName?: string;
  ttlInSecs?: number;
}

const defaultGetSDKAccessTokenParameters: Partial<GetSDKAccessTokenParameters> = {
  levelName: 'basic-kyc-level',
  ttlInSecs: 600,
};

export async function getSDKAccessToken(parameters: GetSDKAccessTokenParameters): Promise<string> {
  const newParameters: GetSDKAccessTokenParameters = {
    ...defaultGetSDKAccessTokenParameters,
    ...parameters,
  };
  console.log(newParameters.auth0);
  const {
    data: { token },
  } = await api.post<{ token: string }>(`/sumsub/get-access-token`, newParameters, {
    fetchOptions: { auth0: newParameters.auth0 },
  });

  return token;
}
