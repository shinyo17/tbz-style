import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "@next/font/local";
import Head from "next/head";

const SUIT = localFont({
  src: [
    {
      path: './SUIT-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './SUIT-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './SUIT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './SUIT-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SUIT-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SUIT-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './SUIT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SUIT-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './SUIT-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>더보이즈 취향표</title>
        <meta name="description" content="더보이즈 취향표" />

        <meta property="og:title" content="더보이즈 취향표" />
        <meta property="og:description" content="더보이즈 취향표" />
        <meta property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bucketlistwithfirebase-e3efc.appspot.com/o/tbz-style.png?alt=media&token=5d37526f-bbde-4872-a0ae-8cf44830eadf" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:url" content="https://tbz-style.vercel.app/" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="더보이즈 취향표" />
        <meta property="twitter:url" content="https://tbz-style.vercel.app/" />
        <meta property="twitter:description" content="더보이즈 취향표" />
        <meta property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/bucketlistwithfirebase-e3efc.appspot.com/o/tbz-style.png?alt=media&token=5d37526f-bbde-4872-a0ae-8cf44830eadf" />
      </Head>
      <main className={SUIT.className}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
