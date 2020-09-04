import React from "react"
import styled from "styled-components"

// const s = props => props.theme.media.s

const Wrap = styled.header`
  height: 65px;
  @media (min-width: 480px) {
    height: 74px;
  }
`

const Header = ({ siteTitle }) => (
  <Wrap>
    <p>TEST</p>
  </Wrap>
)

export default Header
