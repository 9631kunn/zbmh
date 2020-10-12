import React from "react"
import Form from "../Form"

import styled from "styled-components"

const serif = props => props.theme.font.serif

const Wrap = styled.div`
  margin: 80px 0;
  width: 100%;
  h2 {
    font: 2em ${serif};
    margin-block-end: 40px;
  }
`

const Contact = () => (
  <Wrap>
    <h2>お問い合わせ</h2>
    <Form
      src="https://career-m.co.jp/_form/recruitment/"
      title="求人フォーム"
      height="700" // error message用にやや大きく
      spHeight="1000" // error message用にやや大きく
    />
  </Wrap>
)

export default Contact
