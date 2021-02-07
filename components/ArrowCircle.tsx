import React from "react";
import styled from "styled-components";

type ArrowProps = {
	default?: boolean;
	hover?: boolean;
}

const Circle = styled.a`
	cursor: pointer;
	background: rgb(254, 228, 234);
	position: fixed;
	bottom: 10%;
	right: 5%;
	width: 60px;
	height: 60px;
	z-index: 200;
	border-radius: 50%;
	overflow: hidden;
	transform: scale3d(1, 1, 1);
	transition: background 0.7s cubic-bezier(0.19, 1, 0.22, 1),
		transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);

	&:hover {
		background: rgb(255, 255, 255);
		transform: scale3d(1.2, 1.2, 1.2);
	}

`;

const Arrow = styled.svg<ArrowProps>`
	transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	transform: ${(p) =>
			p.default
			? "translate3d(0, -65px, -0) rotate3d(0, 0, 1, 90deg)"
			: "translate3d(0, -65px, -0) rotate3d(0, 0, 1, 90deg)"
		};

	${Circle}:hover & {
		transform: rotate3d(0, 0, 1, 90deg) translate3d(0, 0, -0);
	}
`

export const ArrowCircle = () => {
	return (
		<Circle>
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
