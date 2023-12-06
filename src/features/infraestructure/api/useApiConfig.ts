import {useBearerToken} from './useBearerToken';
import {useInvalidateToken} from './useInvalidateToken';

interface APIConfiguration {
  token: string | undefined;
  invalidateToken: () => void;
}

export const useAPIConfig = (config: APIConfiguration) => {
  useBearerToken(config.token);
  useInvalidateToken(config.invalidateToken);
};
