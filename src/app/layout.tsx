// src/app/layout.tsx
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Hearder from '../components/header';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800'],
});

export const metadata: Metadata = {
  title: 'REST Countries API with Color Theme Switcher',
  description: 'A comprehensive web application that allows users to explore detailed information about countries worldwide using the REST Countries API. This app features a dynamic color theme switcher for a customizable user experience, providing an engaging and user-friendly interface to access geographical and statistical data.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Providers>
          <Hearder />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
