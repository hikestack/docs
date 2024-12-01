import { GoogleAnalytics } from "nextjs-google-analytics";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}