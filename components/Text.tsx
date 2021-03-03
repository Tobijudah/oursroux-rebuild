import styled from "styled-components";

const Text = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	font-size: 0.95em;
	font-weight: 400;
	line-height: 1.75em;
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
