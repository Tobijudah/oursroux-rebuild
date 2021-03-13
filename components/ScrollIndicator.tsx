import React from 'react'
import styled from 'styled-components'

export const ScrollIndicator = styled.div`
  position: fixed;
  bottom: 11%;
  left: 55%;
  width: 180px;
  overflow: hidden;
  z-index: 2;
`

export const ScrollText = styled.p`
  display: block;
  font-family: 'ApercuMedium', sans-serif;
  color: #fff;
  padding-bottom: 0.8rem;
  /* transform: translate3d(0,100%,0); */
`

export const Underline = styled.span`
  position: absolute;
  top: 31px;
  /* left: 180px; */
  width: 100%;
  height: 2px;
  background: #fff;
  /* transform: matrix(1, 0, 0, 1, -180, 0); */
  /* transform: translate3d(-360px,0,0); */
`
