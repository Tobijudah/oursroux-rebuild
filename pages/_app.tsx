import type { AppProps } from "next/app";
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  body {
		padding: 0;
		margin: 0;
		box-sizing: content-box;
		background-color: #000;
		color: #fff;
		font-size: 16px;
		font-family: 'Source Sans Pro', sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
