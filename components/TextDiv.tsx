import React from 'react';
import styled from 'styled-components';
import { dataType } from '../pages/api/data';

export type TextDivProps = {
  Data: dataType;
}

export type TextDivContainerProps = {
  Color: string;
}

const TextDivContainer = styled.div<TextDivContainerProps>`
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${p => p.Color};
`

const Number = styled.h2`
  color: #000;
  font-size: 1.5625em;
  padding: 44.5% 13% 0 13%;
  letter-spacing: -1.5px;
  margin: 0;
`

const Text = styled.div`
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.75em;
  padding: 15% 13%;
  box-sizing: border-box;

  & > p {
    max-width: 70%;
    margin: 0;
  }

`

const TextDiv: React.FC<TextDivProps> = ({ Data }) => {
  return (
    <TextDivContainer Color={Data.color}>
      <Number>{Data.id}</Number>
      <Text>
        <p>{Data.text}</p>
      </Text>
    </TextDivContainer>
  )
}

export default TextDiv
