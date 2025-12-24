import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AnimatePresence>
  );
}

export default MyApp;
