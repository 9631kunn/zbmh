import React from "react"
import Form from "../Form"
import Heading from "../Heading"

import styled from "styled-components"

const Wrap = styled.div`
  margin: 80px 0;
  width: 100%;
`

const Contact = () => (
  <Wrap>
    <Heading>
      <span>Contact</span>
    </Heading>
    <Form
      src="https://zbmhd.co.jp/_form/"
      title="求人フォーム"
      height="700" // error message用にやや大きく
      spHeight="1100" // error message用にやや大きく
    />
  </Wrap>
)

export default Contact
