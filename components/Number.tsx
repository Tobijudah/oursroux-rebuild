import styled from "styled-components";

const NumberIndex = styled.h2`
	position: absolute;
	top: 0;
	left: 0;
	color: #000;
	font-size: 1.5625em;
	font-family: 'ApercuMedium', sans-serif;
	font-weight: normal;
	padding: 45% 13%;
	margin: 0;

	&:first-of-type {
		transform: matrix(1, 0, 0, 1, 0, 0);
	}

	&:not(:first-of-type) {
		transform: translate(-10%, 0%) matrix(1, 0, 0, 1, 0, 0);
		visibility: hidden;
		opacity: 0;
	}
	span {
		font-size: 0.8rem;
	}
`;

export default NumberIndex;
