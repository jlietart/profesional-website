import '../styles/globals.css' // Replace with the path to your global CSS file if you have one
import 'devicon/devicon.min.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;