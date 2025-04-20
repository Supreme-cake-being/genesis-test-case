import "pages/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import { HeroUIProvider } from "@heroui/react";

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}
