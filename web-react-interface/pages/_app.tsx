import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import './globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Nosso App</title>
        <meta name="description" content="Descrição do Nosso App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;