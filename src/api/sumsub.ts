import { api } from './axios';

export interface GetSDKAccessTokenParameters {
  levelName?: string;
  ttlInSecs?: number;
}

const defaultGetSDKAccessTokenParameters: GetSDKAccessTokenParameters = {
  levelName: 'basic-kyc-level',
  ttlInSecs: 600,
};

export async function getSDKAccessToken(parameters?: GetSDKAccessTokenParameters): Promise<string> {
  const newParameters = { ...defaultGetSDKAccessTokenParameters, ...parameters };

  const {
    data: { token },
  } = await api.post<{ token: string }>(`/sumsub/get-access-token`, newParameters);

  return token;
}
