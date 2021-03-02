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

const Number = styled.h2`
  color: #000;
  font-size: 1.5625em;
  padding: 44.5% 13% 0 13%;
  letter-spacing: -1.5px;
  margin: 0;
`;

const Text = styled.div`
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.75em;
  padding: 15% 13%;
  box-sizing: border-box;

  & > p {
    max-width: 70%;
    margin: 0;
  }
`;

const e: React.FC<TextDivProps> = ({}) => {
	return (
		<>
			<Number>1</Number>
			<Text>
				<p>1</p>
			</Text>
		</>
	);
};

export default TextDiv;
