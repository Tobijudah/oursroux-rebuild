import React from 'react';
import styled from 'styled-components';
import { dataType } from '../pages/api/data';

export type TextDivProps = {
  Data: dataType;
}

const Div = styled.div<TextDivProps>`
  height: 100vh;
  width: 40%;
  background-color: ${p => p.Data.color};
`

const TextDiv: React.FC<TextDivProps> = ({ Data }) => {
  return (
    <Div Data={Data}>
      
    </Div>
  )
}

export default TextDiv
