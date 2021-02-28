import React, {
	useRef,
	useState,
	forwardRef,
	useImperativeHandle,
	ForwardRefRenderFunction,
} from "react";
import styled from "styled-components";
import TitleAnimation from "../animations/TitleAnimation";

type TitleProps = {
	dataIndex: number;
	dataSize: number;
	dataCurrent: number;
	children: React.ReactNode;
};

export type TitleRefHandles = {
	startAnimation: () => void;
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
			dataIndex === 0
				? -dataSize * 0.05
				: -dataSize * dataIndex + dataSize * 0.05
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

const Title: ForwardRefRenderFunction<TitleRefHandles, TitleProps> = (
	{ dataIndex, dataSize, dataCurrent, children },
	ref
) => {
	const titleRef = useRef<HTMLDivElement>(null);
	const [translateX, setTranslateX] = useState(
		dataIndex === 0
			? -(dataSize * 0.05)
			: -dataSize * dataIndex + dataSize * 0.05
	);

	useImperativeHandle(ref, () => ({
		startAnimation: () => {
			TitleAnimation(
				titleRef.current,
				dataSize,
				translateX,
				dataCurrent,
				dataIndex
			);
			setTimeout(() => {
				setTranslateX(
					dataCurrent === dataIndex || dataCurrent > dataIndex
						? dataSize * 0.9
						: dataCurrent + 1 === dataIndex
						? -72
						: translateX + dataSize
				);
			}, 1000);
		},
	}));

	return (
		<TitleContainer
			ref={titleRef}
			dataSize={dataSize}
			dataIndex={dataIndex}
			dataCurrent={dataCurrent}
		>
			<TitleTextContainer>
				<Titletext>{children}</Titletext>
			</TitleTextContainer>
		</TitleContainer>
	);
};

export default forwardRef(Title);
