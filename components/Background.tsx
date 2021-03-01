import React, {
	useRef,
	forwardRef,
	useImperativeHandle,
	ForwardRefRenderFunction,
} from "react";
import styled from "styled-components";
import { RefHandle } from "../hooks/useRefArray";

type BackgroundProps = {
	dataSize: number;
	dataIndex: number;
	dataImage: string;
};

type BackgroundContainerProps = Pick<BackgroundProps, "dataSize" | "dataIndex">;

type BackgroundImageProps = Pick<BackgroundProps, "dataImage">;

const BackgroundContainer = styled.div<BackgroundContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	transform: ${(p) =>
		`matrix(1, 0, 0, 1, ${
			p.dataIndex === 0
				? p.dataSize / 10
				: Math.round(-0.6 * p.dataIndex * p.dataSize)
		}, 0)`};
	z-index: ${(p) => 14 - p.dataIndex};
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
	{ dataSize, dataIndex, dataImage },
	ref
) => {
	const backgroundRef = useRef<HTMLDivElement>(null);

	useImperativeHandle(ref, () => ({
		startAnimation: () => {},
	}));

	return (
		<BackgroundContainer
			ref={backgroundRef}
			dataSize={dataSize}
			dataIndex={dataIndex}
		>
			<BackgroundImage dataImage={dataImage} />
		</BackgroundContainer>
	);
};

export default forwardRef(Background);
