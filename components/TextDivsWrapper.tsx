import styled from "styled-components";

type TextDivsWrapperProps = {
  dataSize: number;
}

const TextDivsWrapper = styled.section<TextDivsWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  margin: auto;
  clip-path: ${p => `inset(0px 0px 0px ${p.dataSize / 10}px)`};
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  overflow: hidden;
  z-index: 10;
`

export default TextDivsWrapper;