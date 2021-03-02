import styled from "styled-components";

type TextDivsWrapperProps = {
  dataSize: number;
}

const TextDivsWrapper = styled.section<TextDivsWrapperProps>`
  position: absolute;
  left: 0;
  margin: auto;
  width: 100%;
  clip: ${p => `rect(0px, ${p.dataSize / 2}px, 100vh, ${p.dataSize / 10}px)`};
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
 
`

export default TextDivsWrapper;