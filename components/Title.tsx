import React, {
	useRef,
	useEffect,
	forwardRef,
	useImperativeHandle,
	ForwardRefRenderFunction,
} from "react";
import gsap from "gsap";
import styled from "styled-components";
import useStateRef from "../hooks/useStateRef";
import { RefHandle } from "../hooks/useRefArray";
import TitleAnimation from "../animations/TitleAnimation";

type TitleProps = {
	dataIndex: number;
	dataSize: number;
	dataCurrent: number;
	children: React.ReactNode;
};

type TitleContainerProps = Pick<TitleProps, "dataIndex" | "dataCurrent"> & {
	translateX: number;
};

const TitleContainer = styled.div<TitleContainerProps>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	text-align: right;
	margin: auto;
	display: ${({ dataIndex, dataCurrent }) =>
		dataCurrent - dataIndex > 1 ? "none" : "table"};
`;

const TitleTextContainer = styled.div`
	height: 100%;
	display: table-cell;
	vertical-align: middle;
`;

const Titletext = styled.h1`
	position: relative;
	display: inline-block;
	font-size: 15.5vw;
	line-height: 16.5vw;
	font-weight: 500;
	transform: matrix(1, 0, 0, 1.08, 0, 21.7333);
	padding-bottom: 1.5rem;
`;

const Title: ForwardRefRenderFunction<RefHandle, TitleProps> = (
	{ dataIndex, dataSize, dataCurrent, children },
	ref
) => {
	const titleRef = useRef<HTMLDivElement>(null);
	const [stateRef, translateX, setTranslateX] = useStateRef(0)

	useEffect(() => {
		setTranslateX(
			dataCurrent > dataIndex
				? dataSize * 0.9
				: dataCurrent === dataIndex
				? -(dataSize * 0.05)
				: -dataSize * 0.95 * (dataIndex - dataCurrent)
		)
		gsap.set(titleRef.current, {
			transform: `matrix(1, 0, 0, 1, ${stateRef.current}, 0)`
		})
	}, [dataSize])

	useImperativeHandle(ref, () => ({
		startAnimation: (direction) => {
			TitleAnimation(
				direction,
				titleRef.current,
				dataSize,
				translateX,
				dataCurrent,
				dataIndex,
				setTranslateX
			);
		},
	}));

	return (
		<TitleContainer
			ref={titleRef}
			dataIndex={dataIndex}
			translateX={translateX}
			dataCurrent={dataCurrent}
		>
			<TitleTextContainer>
				<Titletext>{children}</Titletext>
			</TitleTextContainer>
		</TitleContainer>
	);
};

export default forwardRef(Title);
