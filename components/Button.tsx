import styled from "styled-components";

export type ButtonProps = {
	left?: boolean;
	right?: boolean;
};

const Button = styled.button<ButtonProps>`
	cursor: pointer;
	position: fixed;
	top: 8%;
	left: ${(p) => (p.left ? "5%" : "initial")};
	right: ${(p) => (p.right ? "5%" : "initial")};
	display: block;
	background-color: transparent;
	color: #fff;
	font-size: 1em;
	font-family: 'ApercuMedium', sans-serif;
	text-decoration: none;
	border: 0;
	opacity: 0;
	transition: opacity 0.9s cubic-bezier(0.19, 1, 0.22, 1),
		transform .6s cubic-bezier(.19,1,.22,1);
	z-index: 100;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: -2px;
		right: ${(p) => (p.left ? "100%" : "initial")};
		left: ${(p) => (p.right ? "100%" : "initial")};
		width: 10vw;
		height: 2px;
		background: #fee4ea;
		background: #ffffff;
		transition: color 1s cubic-bezier(0.19, 1, 0.22, 1) 0s,
			transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s,
			width 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0s;
	}

	&::before {
		transform: ${(p) =>
			p.left
			? "translate3d(-35px, 12px, 0px)"
			: "translate3d(50%,12px,0)"
		};
	}

	&::after {
		transform: ${(p) =>
			p.left
			? "translate3d(-155px, 12px, 0px)"
			: "translate3d(155px,12px,0)"
		};
	}

	&:hover {
		transform: ${(p) =>
			p.left
			? "translate3d(10px,0,0)"
			: "translate3d(-10px,0,0)"
		};

		&::before {
			width: 0vw;
			transform: ${(p) =>
				p.left
				? "translate3d(140px, 12px, 0px)"
				: "translate3d(-100px,12px,0)"
			};
		}

		&::after {
			transform: ${(p) =>
				p.left
				? "translate3d(-30px, 12px, 0px)"
				: "translate3d(30px,12px,0)"
			};
		}

	}

	@media (max-width: 650px) {
		display: none;
	}

`;

export default Button;
