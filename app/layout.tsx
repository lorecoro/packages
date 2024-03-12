'use client'

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface Props {
  session: Session | null
  children: React.ReactNode
}

const RootLayout: React.FC <Props> = ({ children, session }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
