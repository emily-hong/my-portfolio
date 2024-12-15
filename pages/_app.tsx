import "../styles/global.css"; // 글로벌 CSS 경로
import { AppProps } from "next/app";
import "./i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
