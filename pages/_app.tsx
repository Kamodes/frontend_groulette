import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../authContext";
import { Header } from "./header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
