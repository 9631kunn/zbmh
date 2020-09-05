import React from "react"

import styled from "styled-components"

const headerHeightS = props => props.theme.headerHeight.s
const headerHeightM = props => props.theme.headerHeight.m
const mediaS = props => props.theme.media.s
const container = props => props.theme.container.main

const Wrap = styled.main`
  padding-top: ${headerHeightS};
  @media (min-width: ${mediaS}) {
    padding-top: ${headerHeightM};
  }
`

const Container = styled.div`
  margin: auto;
  max-width: ${container};
  padding: 0 10px;
`

const Main = ({ children }) => (
  <Wrap>
    <Container>{children}</Container>
  </Wrap>
)

export default Main
