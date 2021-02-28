import React from "react";
import Title from "./Title";
import TextDiv from "./TextDiv";
import styled from "styled-components";
import { dataType } from "../pages/api/data";
import useWindowWidth from "../hooks/useWindowWidth";

type SectionProps = {
	Data: dataType;
};

type SectionContainerProps = {
	Data: dataType;
	WindowWidth: number;
};

const SectionContainer = styled.section<SectionContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	background-image: url(${(p) => `images/${p.Data.image}.jpg`});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	transform: ${(p) =>
		`matrix(1, 0, 0, 1, ${
			p.Data.id === "01"
				? p.WindowWidth / 10
				: (parseInt(p.Data.id, 10) - 1) * -6 * (p.WindowWidth / 10)
		}, 0)`};
	z-index: ${(p) => 14 - parseInt(p.Data.id, 10)};
`;

const Section: React.FC<SectionProps> = ({ Data }) => {
	const size = useWindowWidth();

	return (
		<SectionContainer WindowWidth={size} Data={Data}>
			<TextDiv Data={Data} />
		</SectionContainer>
	);
};

export default Section;
