import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	display: table;
	text-align: right;
	margin: auto;
	transform: matrix(1, 0, 0, 1, -195, 0);
`;

const TitleTextContainer = styled.div `
  height: 100%;
	display: table-cell;
	vertical-align: middle;
`

const Titletext = styled.h1`
  position: relative;
  display: inline-block;
	font-size: 15.15vw;
	line-height: 16.15vw;
	font-weight: 500;
	transform: matrix(1, 0, 0, 1.08, 0, 21.7333);
  padding-bottom: 1.5rem;
`;

const Title = (props: { children: React.ReactNode }) => {
	return (
		<TitleContainer>
      <TitleTextContainer>
			  <Titletext>{props.children}</Titletext>
      </TitleTextContainer>
		</TitleContainer>
	);
};

export default Title;
