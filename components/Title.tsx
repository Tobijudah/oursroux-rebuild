import React, { FC } from "react";
import styled from "styled-components";

type TitleProps = {
	dataIndex: number;
	dataSize: number;
};

const TitleContainer = styled.div<TitleProps>`
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
	transform: ${({ dataIndex, dataSize }) =>
		`matrix(1, 0, 0, 1, ${
			dataIndex === 0 ? -72 : -dataSize * dataIndex + 72
		}, 0)`};
`;

const TitleTextContainer = styled.div`
	height: 100%;
	display: table-cell;
	vertical-align: middle;
`;

const Titletext = styled.h1`
	position: relative;
	display: inline-block;
	font-size: 15.15vw;
	line-height: 16.15vw;
	font-weight: 500;
	transform: matrix(1, 0, 0, 1.08, 0, 21.7333);
	padding-bottom: 1.5rem;
`;

const Title: FC<TitleProps> = ({ dataIndex, dataSize, children }) => {
	return (
		<TitleContainer dataIndex={dataIndex} dataSize={dataSize}>
			<TitleTextContainer>
				<Titletext>{children}</Titletext>
			</TitleTextContainer>
		</TitleContainer>
	);
};

export default Title;
