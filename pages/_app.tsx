import type { AppProps } from "next/app";
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

	#mobile {
		display: none;
		color: #000;
	}

	* {
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 16px;
	}

  body {
		padding: 0;
		margin: 0;
		box-sizing: content-box;
		background-color: #000;
		color: #fff;
		font-size: 100%;
		font-family: 'Open Sans', sans-serif;
  }

	h1 {
		font-family: 'Cormorant Garamond', serif;
	}

	p {
		color: #000;
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		body {
			font-size: 90%;
		}
	}

	@media (min-width: 1024px) and (max-width: 1280px) {
		body {
			font-size: 95%;
		}
	}

	@media (max-width: 768px) {
		body {
			font-size: 80%;
		}
	}

	@media (max-width: 650px) {
		#desktop {
			display: none;
		}
		#mobile {
			display: block;
		}
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
