import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import styled from "styled-components"
import gradAnimation from "../styles/animation/gradAnimation"

const mediaS = props => props.theme.media.s
const mainColor = props => props.theme.color.main
const subColor = props => props.theme.color.sub
const serif = props => props.theme.font.serif
const deco = props => props.theme.font.deco

const Wrap = styled.div`
  display: grid;
  height: calc(100vh - 65px);
  place-items: center;
  width: 100%;
  @media (min-width: ${mediaS}) {
    height: calc(100vh - 85px);
  }
  p {
    font-family: ${serif};
  }
`

const Title = styled.h1`
  animation: ${gradAnimation} 4s infinite;
  background: linear-gradient(45deg, ${mainColor}, ${subColor});
  background-size: 500% 500%;
  color: ${mainColor};
  font: bold italic 100px ${deco};
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NotFoundPage = props => (
  <Layout>
    <SEO pageTitle="ページが見つかりませんでした" location={props.location} />
    <Wrap>
      <div>
        <Title>404</Title>
        <p>ページが見つかりませんでした</p>
      </div>
    </Wrap>
  </Layout>
)

export default NotFoundPage
