import React from "react"
import styled from "styled-components"

import Image from "./Image"

const headerHeightS = props => props.theme.headerHeight.s
const headerHeightM = props => props.theme.headerHeight.m
const mediaS = props => props.theme.media.s
const container = props => props.theme.container.header

const Wrap = styled.header`
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 4px hsl(0 0% 0% / 20%);
  height: ${headerHeightS};
  padding: 10px 0 5px;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (min-width: ${mediaS}) {
    height: ${headerHeightM};
    padding: 25px 0 10px;
  }
`

const Container = styled.div`
  margin: auto;
  max-width: ${container};
  padding: 0 10px;
  width: 100%;
  .logo {
    width: 190px;
    @media (min-width: ${mediaS}) {
      width: 210px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Wrap>
    <Container>
      <Image
        filename="logo__pc.png"
        className="logo"
        alt={siteTitle + " ロゴ"}
      />
    </Container>
  </Wrap>
)

export default Header
