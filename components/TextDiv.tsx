import React from "react";
import styled from "styled-components";

export type TextDivProps = {
	dataColor: string;
};

const TextDiv = styled.div<TextDivProps>`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${(p) => p.dataColor};

	&:first-of-type {
		z-index: 2;
		transform: matrix(1, 0, 0, 1, 0, 0);
	}

	&:not(:first-of-type) {
		transform: translate(-80%, 0%) matrix(1, 0, 0, 1, 0, 0);
	}
`;

export default TextDiv;
