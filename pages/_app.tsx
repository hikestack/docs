import { GoogleTagManager } from '@next/third-parties/google'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager gtmId="G-G1G5G0PTKD" />
      <Component {...pageProps} />
    </>
  );
}