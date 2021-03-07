import type { AppProps } from "next/app";
import {
	DefaultTheme,
	createGlobalStyle,
	GlobalStyleComponent,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

	@font-face {
		font-family: 'Potrait';
		src: url('fonts/Portrait-Light.woff') format('woff');
	}

	@font-face {
		font-family: 'ApercuLight';
		src: local('ApercuLight'),
		url('fonts/ApercuLight.woff') format('woff');
	}

	@font-face {
		font-family: 'ApercuMedium';
		src: local('ApercuMedium'),
		url('fonts/ApercuMedium.woff') format('woff');
	}

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
