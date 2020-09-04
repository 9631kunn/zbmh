import React from "react"
import styled from "styled-components"

const Wrap = styled.footer``

const Footer = ({ siteTitle }) => {
  return (
    <Wrap>
      © {new Date().getFullYear()} {siteTitle}
    </Wrap>
  )
}

export default Footer
