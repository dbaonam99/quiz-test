'use client';

import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/lib/apollo';

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ApolloProvider client={apolloClient}>
        <body>{children}</body>
      </ApolloProvider>
    </html>
  );
}
