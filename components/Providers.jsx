'use client';

import { SessionProvider } from 'next-auth/react';

export const ProvidersUser = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
