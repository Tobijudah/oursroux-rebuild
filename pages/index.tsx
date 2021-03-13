import Head from "next/head";
import { data } from "./api/data";
import Text from "../components/Text";
import styled from "styled-components";
import Title from "../components/Title";
import Button from "../components/Button";
import TextDiv from "../components/TextDiv";
import { useSwipeable } from "react-swipeable";
import useRefArray from "../hooks/useRefArray";
import NumberIndex from "../components/Number";
import React, { useRef, useState } from "react";
import Preloader from "../components/Preloader";
import Background from "../components/Background";
import ArrowCircle from "../components/ArrowCircle";
import TextWrapper from "../components/TextWrapper";
import useWindowWidth from "../hooks/useWindowWidth";
import TitlesWrapper from "../components/TitlesWrapper";
import TextAnimation from "../animations/TextAnimation";
import IntroAnimation from '../animations/IntroAnimation';
import TextDivsWrapper from "../components/TextDivsWrapper";
import TextDivAnimation from "../animations/TextDivsAnimation";
import BackgroundsWrapper from "../components/BackgroundsWrapper";

const Container = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: row-reverse;
	background-color: #fff;
	overflow: hidden;
`;

export default function Home() {
	const size = useWindowWidth();
	const arrowCircleRef = useRef(null);
	const textWrapperRef = useRef(null);
	const titlesWrapperRef = useRef(null);
	const textDivsWrapperRef = useRef(null);
	const backgroundsWrapperRef = useRef(null);
	const [current, setCurrent] = useState<number>(0);
	const textRefs = useRefArray(data.length, "normal");
	const titleRefs = useRefArray(data.length, "handle");
	const numberRefs = useRefArray(data.length, "normal");
	const textDivRefs = useRefArray(data.length, "normal");
	const [isMobile, setIsMobile] = useState<boolean>(size <= 650);
	const backgroundRefs = useRefArray(data.length, "handle");
	const [isScrolling, setIsScrolling] = useState<boolean>(false);

	const handleScroll = async (e: React.WheelEvent<HTMLDivElement>) => {
		if (isScrolling) return;
		if (e.deltaY === -0) return;
		setIsScrolling(true);

		if (e.deltaY > 0) {
			if (current === 13) {
				setIsScrolling(false);
				return;
			}
			await setCurrent(current + 1);
			titleRefs &&
				titleRefs.forEach((ref) => ref.current.startAnimation("up"));
			textRefs &&
				textRefs.forEach((ref) =>
					TextAnimation(
						"up",
						ref.current,
						current,
						ref.current.tabIndex
					)
				);
			numberRefs &&
				numberRefs.forEach((ref) =>
					TextAnimation(
						"up",
						ref.current,
						current,
						ref.current.tabIndex
					)
				);
			textDivRefs &&
				textDivRefs.forEach((ref) =>
					TextDivAnimation(
						"up",
						ref.current,
						current,
						ref.current.tabIndex
					)
				);
			backgroundRefs &&
				backgroundRefs.forEach((ref) =>
					ref.current.startAnimation("up")
				);
		}

		else if (e.deltaY < 0) {
			if (current === 0) {
				setIsScrolling(false);
				return;
			}
			await setCurrent(current - 1);
			titleRefs &&
				titleRefs.forEach((ref) => ref.current.startAnimation("down"));
			textRefs &&
				textRefs.forEach((ref) =>
					TextAnimation(
						"down",
						ref.current,
						current,
						ref.current.tabIndex
					)
				);
			numberRefs &&
				numberRefs.forEach((ref) =>
					TextAnimation(
						"down",
						ref.current,
						current,
						ref.current.tabIndex
					)
				);
			textDivRefs &&
				textDivRefs.forEach((ref) =>
					TextDivAnimation(
						"down",
						ref.current,
						current,
						ref.current.tabIndex
					)
				);
			backgroundRefs &&
				backgroundRefs.forEach((ref) =>
					ref.current.startAnimation("down")
				);
		}

		setTimeout(() => {
			setIsScrolling(false);
		}, 1500);
	};

	const handlers = useSwipeable({
    onSwiped: (e) => {
			if (isScrolling) return;
			if (e.deltaY === -0) return;
			setIsScrolling(true);

			if (e.dir === 'Up') {
				if (current === 13) {
					setIsScrolling(false);
					return;
				}
				setCurrent(current + 1);
				titleRefs &&
					titleRefs.forEach((ref) => ref.current.startAnimation("up"));
				textRefs &&
					textRefs.forEach((ref) =>
						TextAnimation(
							"up",
							ref.current,
							current,
							ref.current.tabIndex
						)
					);
				numberRefs &&
					numberRefs.forEach((ref) =>
						TextAnimation(
							"up",
							ref.current,
							current,
							ref.current.tabIndex
						)
					);
				textDivRefs &&
					textDivRefs.forEach((ref) =>
						TextDivAnimation(
							"up",
							ref.current,
							current,
							ref.current.tabIndex
						)
					);
				backgroundRefs &&
					backgroundRefs.forEach((ref) =>
						ref.current.startAnimation("up")
					);
			}

			if (e.dir === 'Down') {
				if (current === 0) {
					setIsScrolling(false);
					return;
				}
				setCurrent(current - 1);
				titleRefs &&
					titleRefs.forEach((ref) => ref.current.startAnimation("down"));
				textRefs &&
					textRefs.forEach((ref) =>
						TextAnimation(
							"down",
							ref.current,
							current,
							ref.current.tabIndex
						)
					);
				numberRefs &&
					numberRefs.forEach((ref) =>
						TextAnimation(
							"down",
							ref.current,
							current,
							ref.current.tabIndex
						)
					);
				textDivRefs &&
					textDivRefs.forEach((ref) =>
						TextDivAnimation(
							"down",
							ref.current,
							current,
							ref.current.tabIndex
						)
					);
				backgroundRefs &&
					backgroundRefs.forEach((ref) =>
						ref.current.startAnimation("down")
					);
			}

			setTimeout(() => {
				setIsScrolling(false);
			}, 1500);
		},
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

	React.useEffect(() => {
		setIsMobile(size <= 650)
	}, [size])

	React.useEffect(() => {
		!isMobile && current === 0 && IntroAnimation(
			arrowCircleRef.current,
			textWrapperRef.current,
			titlesWrapperRef.current,
			textDivsWrapperRef.current,
			backgroundsWrapperRef.current,
		)
	}, [isMobile])
	
	return (
		<div>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimal-ui, shrink-to-fit=no"
				/>
				<title>Benjamin Guedj - French designer</title>
				<link
					href="https://www.oursroux.com/favicon.ico"
					rel="shortcut icon"
				/>
			</Head>
			<style jsx>{`
				@font-face {
					font-family: 'Potrait';
					src: url('fonts/Portrait-Light.woff') format('woff');
					font-display: swap;
				}

				@font-face {
					font-family: 'ApercuLight';
					src: url('fonts/ApercuLight.woff') format('woff');
					font-display: swap;
				}

				@font-face {
					font-family: 'ApercuMedium';
					src: url('fonts/ApercuMedium.woff') format('woff');
					font-display: swap;
				}
			`}</style>

			<Button left>All projects</Button>
			<Button right>About</Button>

			{!isMobile && current === 0 && <Preloader />}

			{!isMobile && <Container {...handlers} onWheel={(e) => handleScroll(e)}>
				<ArrowCircle ref={arrowCircleRef} dataColor={data[current].color} />
				<TitlesWrapper ref={titlesWrapperRef}>
					{data.map(({ index, title }) => (
						<Title
							key={index}
							dataSize={size}
							dataIndex={index}
							dataCurrent={current}
							ref={titleRefs[index]}
						>
							{title}
						</Title>
					))}
				</TitlesWrapper>
				<TextDivsWrapper dataSize={size} ref={textDivsWrapperRef}>
					{data.map(({ color, index }) => (
						<TextDiv
							key={index}
							tabIndex={index}
							dataColor={color}
							ref={textDivRefs[index]}
						/>
					))}
					<TextWrapper ref={textWrapperRef}>
						{data.map(({ id, index }) => (
							<NumberIndex key={index}
								ref={numberRefs[index]}
								tabIndex={index}
							>
								{id}
							</NumberIndex>
						))}
						{data.map(({ text, index }) => (
							<Text key={index} ref={textRefs[index]} tabIndex={index}>
								<p>{text}</p>
							</Text>
						))}
					</TextWrapper>
				</TextDivsWrapper>
				<BackgroundsWrapper ref={backgroundsWrapperRef}>
					{data.map(({ index, image }) => (
						<Background
							key={index}
							dataSize={size}
							dataIndex={index}
							dataImage={image}
							dataCurrent={current}
							ref={backgroundRefs[index]}
						/>
					))}
				</BackgroundsWrapper>
			</Container>}
			{isMobile && <Container>
				<NumberIndex>No mobile boss.<br/>Open your laptop</NumberIndex>
				<Text>
					<a target="_blank" rel="noopener noreferrer" href='http://mobile.oursroux.com'>https://mobile.oursroux.com/</a>
				</Text>
			</Container>}
		</div>
	);
}
