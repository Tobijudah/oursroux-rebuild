import gsap from "gsap";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

type PreloaderProps = {
	setLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const PreloaderContainer = styled.section`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: #0b0b0b;
	margin: auto;
	z-index: 40;
`;

const LoadingBar = styled.main`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: #fff;
	transform: translate3d(-100%, 0, 0);
`;

const Percentage = styled.p`
	position: absolute;
	right: 4%;
	bottom: calc(2rem + 10%);
	color: #fff;
	font-size: 7.5rem;
	font-family: "ApercuLight", sans-serif;
	opacity: 0.1;
`

const TextContainer = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	padding: 5%;
	text-align: right;

	.text {
		font-family: "ApercuMedium", sans-serif;
		font-size: 1.125rem;
		color: #fff;

		&.black-text {
			position: absolute;
			top: 50%;
			color: #000;
			opacity: 0;
			transform: translateY(-50%);
			clip: rect(0px, 135px, 45px, 0px);
		}
	}
`;

const Preloader: React.FC<PreloaderProps> = ({ setLoaded }) => {
	const preloaderRef = useRef(null);
	const blackTextRef = useRef(null);
	const whiteTextRef = useRef(null);
	const loadingBarRef = useRef(null);
	const [loadingPercentage, setLoadingPercentage] = useState<number>(0);

	const updateNumber = () => {
		const id = setInterval(function () {
			setLoadingPercentage((prevState) => prevState + 1);
		}, 10);
		setTimeout(() => {
			clearInterval(id);
		}, 1000);
	};

	useEffect(() => {
		const preload = gsap.timeline({ delay: 1 });
		preload.to(loadingBarRef.current, {
			duration: 1,
			transform: `translate3d(0%, 0, 0)`,
			onStart: updateNumber,
		})
		.to(whiteTextRef.current, {
				duration: 0,
				opacity: 0,
		}, "-=0.25"	)
		.to(blackTextRef.current, {
			duration: 0,
			opacity: 1,
		}, 	"-=0.25")
		.to(blackTextRef.current, {
			delay: 1.5,
			duration: 0.25,
			opacity: 0,
		});
		preload.eventCallback("onComplete", () => {
			preload.kill();
			setLoaded(true)
			gsap.set(preloaderRef.current, {zIndex: -1})
		});
	}, []);

	return (
		<PreloaderContainer ref={preloaderRef}>
			<LoadingBar ref={loadingBarRef}></LoadingBar>
			<Percentage className="number">
				{loadingPercentage.toString().length === 1 && 0}
				{loadingPercentage}
			</Percentage>
			<TextContainer>
				<p ref={whiteTextRef} className="text">
					Benjamin Guedj
					<br />
					French designer
				</p>
				<p ref={blackTextRef} className="text black-text">
					Benjamin Guedj
					<br />
					French designer
				</p>
			</TextContainer>
		</PreloaderContainer>
	);
};

export default Preloader;
