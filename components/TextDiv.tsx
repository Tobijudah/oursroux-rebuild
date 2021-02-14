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
  font-size: 2rem;
  padding: 45% 13%;
  margin: 0;
`

const Text = styled.div`
  color: #000;
  font-size: 1.32rem;
  font-weight: 300;
  line-height: 2.1rem;
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
