import type { AppProps } from "next/app";
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
	}

  body {
		padding: 0;
		margin: 0;
		box-sizing: content-box;
		background-color: #000;
		color: #fff;
		font-size: 16px;
		font-family: 'Open Sans', sans-serif;
  }

	h1 {
		font-family: 'Cormorant Garamond', serif;
	}

	p {
		color: #000;
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
