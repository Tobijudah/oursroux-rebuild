import React, {
	useRef,
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
	ForwardRefRenderFunction,
} from "react";
import gsap from "gsap";
import styled from "styled-components";
import useStateRef from "../hooks/useStateRef";
import { RefHandle } from "../hooks/useRefArray";
import BackgroundAnimation from "../animations/BackgroundAnimation";

type BackgroundProps = {
	dataSize: number;
	dataIndex: number;
	dataImage: string;
	dataCurrent: number;
};

type BackgroundContainerProps = Pick<
	BackgroundProps,
	"dataIndex" | "dataCurrent"
> & {
	translateX: number;
};

type BackgroundImageProps = Pick<BackgroundProps, "dataImage">;

const BackgroundContainer = styled.div<BackgroundContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	display: ${(p) =>
		p.dataCurrent === p.dataIndex ||
		p.dataCurrent - p.dataIndex === -1 ||
		p.dataCurrent - p.dataIndex === -2 ||
		p.dataCurrent - p.dataIndex === 1
			? "block"
			: "none"};
	z-index: ${(p) =>
		p.dataCurrent === p.dataIndex
			? 3
			: p.dataCurrent - p.dataIndex === -1 ||
			  p.dataCurrent - p.dataIndex === 1
			? 2
			: null};
`;

const BackgroundImage = styled.div<BackgroundImageProps>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 100%;
	height: 100%;
	background-image: url(${(p) => `images/${p.dataImage}.jpg`});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
`;

const Background: ForwardRefRenderFunction<RefHandle, BackgroundProps> = (
	{ dataSize, dataIndex, dataImage, dataCurrent },
	ref
) => {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const [stateRef, translateX, setTranslateX] = useStateRef(0);

	useEffect(() => {
		setTranslateX(
			dataCurrent === 12 && dataIndex === 13
				? 0
				: dataCurrent === dataIndex
				? dataSize / 10
				: dataCurrent > dataIndex
				? dataSize
				: -dataSize * 0.6 * (dataIndex - dataCurrent)
		)
		gsap.set(backgroundRef.current, {
			transform: `matrix(1, 0, 0, 1, ${stateRef.current}, 0)`
		})
	}, [dataSize])

	useImperativeHandle(ref, () => ({
		startAnimation: (direction) => {
			BackgroundAnimation(
				direction,
				backgroundRef.current,
				dataSize,
				translateX,
				dataCurrent,
				dataIndex,
				setTranslateX
			);
		},
	}));

	return (
		<BackgroundContainer
			ref={backgroundRef}
			dataIndex={dataIndex}
			translateX={translateX}
			dataCurrent={dataCurrent}
		>
			<BackgroundImage dataImage={dataImage} />
		</BackgroundContainer>
	);
};

export default forwardRef(Background);
