import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
