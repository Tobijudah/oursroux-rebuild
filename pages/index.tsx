import Head from "next/head";
import { useState } from "react";
import { data } from "./api/data";
import styled from "styled-components";
import Title from "../components/Title";
import Button from "../components/Button";
import TextDiv from "../components/TextDiv";
import useRefArray from "../hooks/useRefArray";
import Background from "../components/Background";
import ArrowCircle from "../components/ArrowCircle";
import useWindowWidth from "../hooks/useWindowWidth";
import TitlesWrapper from "../components/TitlesWrapper";
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
	const [current, setCurrent] = useState<number>(0);
	const titleRefs = useRefArray(data.length, "handle");
	const textDivRefs = useRefArray(data.length, "normal");
	const backgroundRefs = useRefArray(data.length, "handle");
	const [isScrolling, setIsScrolling] = useState<boolean>(false);

	const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
		if (isScrolling) return;
		if (e.deltaY === -0) return;
		setIsScrolling(true);

		if (e.deltaY > 0) {
			if (current === 13) {
				setIsScrolling(false);
				return;
			}
			setCurrent(current + 1);
			titleRefs &&
				titleRefs.forEach((ref) => ref.current.startAnimation("up"));
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

		if (e.deltaY < 0) {
			if (current === 0) {
				setIsScrolling(false);
				return;
			}
			setCurrent(current - 1);
			titleRefs &&
				titleRefs.forEach((ref) => ref.current.startAnimation("down"));
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

	return (
		<div>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimal-ui, shrink-to-fit=no"
				/>
				<title>Benjamin Guedj - French designer</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Open+Sans:wght@400;600&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://www.oursroux.com/favicon.ico"
					rel="shortcut icon"
				/>
			</Head>

			<Button left>All projects</Button>
			<Button right>About</Button>

			{typeof size === "number" && (
				<Container onWheel={(e) => handleScroll(e)}>
					<ArrowCircle Color={data[current].color} />
					<TitlesWrapper>
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
					<TextDivsWrapper dataSize={size}>
						{data.map(({ color, index }) => (
							<TextDiv
								key={index}
								tabIndex={index}
								dataColor={color}
								ref={textDivRefs[index]}
							/>
						))}
					</TextDivsWrapper>
					<BackgroundsWrapper>
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
				</Container>
			)}
		</div>
	);
}
