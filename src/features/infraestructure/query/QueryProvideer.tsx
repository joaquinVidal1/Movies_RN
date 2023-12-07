import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {ReactNode} from 'react';
import {useAPIConfig} from '../api/useApiConfig';
import {useLinkQueryToScreenFocus} from './useLinkQueryToScreenFocus';

const queryClient = new QueryClient();

const QueryProvider: React.FC<{children: ReactNode}> = ({children}) => {
  useLinkQueryToScreenFocus();
  useAPIConfig({
    token: '0a41c523-fa00-418a-a585-7dd1fc5f18e4',
    invalidateToken: () => {},
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
