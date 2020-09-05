import React from "react"
import styled from "styled-components"

import Image from "./Image"

const headerHeightS = props => props.theme.headerHeight.s
const headerHeightM = props => props.theme.headerHeight.m
const mediaS = props => props.theme.media.s

const Wrap = styled.header`
  height: ${headerHeightS};
  padding: 10px 0 5px;
  position: fixed;
  width: 100%;
  @media (min-width: ${mediaS}) {
    height: ${headerHeightM};
    padding: 25px 0 10px;
  }
`

const Container = styled.div`
  margin: auto;
  padding: 0 10px;
  width: 100%;
  .logo {
    width: 200px;
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
