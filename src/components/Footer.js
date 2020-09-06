import React from "react"
import styled from "styled-components"

const mainColor = props => props.theme.color.main
const container = props => props.theme.container.footer

const Wrap = styled.footer`
  background: ${mainColor};
`

const Container = styled.div`
  margin: auto;
  max-width: ${container};
  padding: 0 10px;
  text-align: center;
  width: 100%;
  small {
    color: #fff;
  }
`

const Footer = ({ siteTitle }) => {
  return (
    <Wrap>
      <Container>
        <small>
          © {new Date().getFullYear()} {siteTitle}
        </small>
      </Container>
    </Wrap>
  )
}

export default Footer
