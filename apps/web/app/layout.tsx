import '@radix-ui/themes/styles.css';

// wrap the project with Theme component
import { Theme } from '@radix-ui/themes';
import { Header } from 'ui';

import { MapStatThemeProvider } from 'ui';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'MapStat',
  description: 'Find on the map get the Stat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={inter.className}>
        <MapStatThemeProvider>
        <Theme accentColor='blue' grayColor='olive' scaling='105%'> 
            <Header text={'MapStat'} />
            {children}
          </Theme>
        </MapStatThemeProvider>
      </body>
    </html>
  );
}