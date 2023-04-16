// import '@/styles/globals.css'
import { Global, ThemeProvider } from "@emotion/react";
import { global } from "@styles/globals";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
