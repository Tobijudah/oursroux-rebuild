import styled from "styled-components";

const Text = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	color: #000;
	font-size: 1em;
	font-family: 'ApercuLight', sans-serif;
	line-height: 1.625em;
	padding: 15% 13%;
	box-sizing: border-box;

	&:first-of-type {
		transform: matrix(1, 0, 0, 1, 0, 0);
	}

	&:not(:first-of-type) {
		transform: translate(-10%, 0%) matrix(1, 0, 0, 1, 0, 0);
		visibility: hidden;
		opacity: 0;
	}

	& > p {
		max-width: 70%;
		margin: 0;
	}
`;

export default Text;
