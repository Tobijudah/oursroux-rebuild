import React, { FC } from "react";
import styled from "styled-components";

type ArrowProps = {
	default?: boolean;
	hover?: boolean;
}

type CircleProps = {
	Color: string;
}

const Circle = styled.a<CircleProps>`
	cursor: pointer;
	background: ${p => p.Color};
	position: fixed;
	bottom: 10%;
	right: 5%;
	width: 56px;
	height: 56px;
	z-index: 200;
	border-radius: 50%;
	overflow: hidden;
	transform: scale3d(1, 1, 1);
	transition: background 0.7s cubic-bezier(0.19, 1, 0.22, 1),
		transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
	z-index: 21;

	&:hover {
		background: rgb(255, 255, 255);
		transform: scale3d(1.095, 1.095, 1.095);
	}

`;

const Arrow = styled.svg<ArrowProps>`
	transform: translate3d(0, -58px, -0) rotate3d(0, 0, 1, 90deg);
	transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

	${Circle}:hover & {
		transform: rotate3d(0, 0, 1, 90deg) translate3d(2px, 0, -0) scale3d(0.85, 0.85, 0.85);
	}
`

export const ArrowCircle: FC<CircleProps> = ({ Color }) => {
	return (
		<Circle Color={Color}>
			<Arrow hover viewBox="0 0 56 56" xmlSpace="preserve">
				<polygon points="31.3,26.8 23.5,19 22.8,19.7 30.6,27.5 22.8,35.3 23.5,36 31.3,28.2 32,27.5"></polygon>
			</Arrow>
			<Arrow default viewBox="0 0 56 56" xmlSpace="preserve">
				<polygon points="31.3,26.8 23.5,19 22.8,19.7 30.6,27.5 22.8,35.3 23.5,36 31.3,28.2 32,27.5"></polygon>
			</Arrow>
		</Circle>
		);
};

export default ArrowCircle;
