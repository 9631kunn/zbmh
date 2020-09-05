import React from "react"

import styled from "styled-components"

const headerHeightS = props => props.theme.headerHeight.s
const headerHeightM = props => props.theme.headerHeight.m
const mediaS = props => props.theme.media.s

const Wrap = styled.main`
  padding-top: ${headerHeightS};
  @media (min-width: ${mediaS}) {
    padding-top: ${headerHeightM};
  }
`

const Main = ({ children }) => <Wrap>{children}</Wrap>

export default Main
