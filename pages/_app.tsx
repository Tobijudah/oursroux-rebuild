import type { AppProps } from "next/app";
import {
	DefaultTheme,
	createGlobalStyle,
	GlobalStyleComponent,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

	#mobile {
		display: none;
		color: #000;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-rendering: geometricPrecision;
		font-smooth: always;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: transparent;
	}

	html {
		font-size: 16px;
	}

  body {
		padding: 0;
		margin: 0;
		box-sizing: content-box;
		font-size: 100%;
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
