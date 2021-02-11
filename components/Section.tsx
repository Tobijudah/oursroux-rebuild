import React from "react";
import styled from "styled-components";
import { dataType } from "../pages/api/data";

type SectionProps = {
  data: dataType;
}

const SectionContainer = styled.section<SectionProps>`
  position: absolute;
  top: 0;
  right: 0;
  transform: ${p => `translateX(-${(
    (parseInt(p.data.id, 10) -1) * 75)
  }vw)`};
	height: 100%;
	width: 90vw;
	min-width: 90vw;
  background-image: url(${p => `images/${p.data.image}.jpg`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  z-index: ${p => 14-(parseInt(p.data.id, 10))};

  &:last-of-type {
    width: 100vw;
    min-width: 100vw;
  }

`;

const Section: React.FC<SectionProps> = ({ data }) => {

	return (
    <SectionContainer data={data}/>
  );
};

export default Section;
