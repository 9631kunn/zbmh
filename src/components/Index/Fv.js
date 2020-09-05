import React from "react"

import styled, { keyframes } from "styled-components"
import "typeface-abel"
import "typeface-noto-serif-jp"
import "typeface-permanent-marker"
import "typeface-nothing-you-could-do"
import "typeface-alata"

const mediaS = props => props.theme.media.s
const mediaM = props => props.theme.media.m
const mainColor = props => props.theme.color.main
const mainOpColor = props => props.theme.color.mainOp
const subColor = props => props.theme.color.sub
const serif = props => props.theme.font.serif
const deco = props => props.theme.font.deco

const Wrap = styled.div`
  margin: 80px 0;
  padding-block-end: 40px;
  position: relative;
  @media (min-width: ${mediaS}) {
    padding-block-end: 50px;
  }
  @media (min-width: ${mediaM}) {
    padding-block-end: 60px;
  }

  &::after {
    bottom: 0;
    color: #efefef;
    content: "ZBMHD Group";
    display: inline-block;
    font: bold italic 40px ${deco};
    line-height: 1;
    opacity: 0.5;
    position: absolute;
    right: 0;
    @media (min-width: ${mediaS}) {
      font-size: 60px;
    }
    @media (min-width: ${mediaM}) {
      font-size: 70px;
    }
  }
`

const fadeIn = keyframes`
  100%{opacity: 1; transform: none;}
`

const gradAnimation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

const progressBar = keyframes`
	0% {
		left: 0;
		width: 0;
	}
	45% {
		left: 0;
		width: 100%;
	}
	50% {
		left: 0;
		width: 100%;
	}
	100% {
		left: 100%;
		width: 0;
	}`

const Heading = styled.h2`
  margin-block-end: 80px;
  overflow: hidden;
  position: relative;
  &::before {
    animation: ${progressBar} 1.25s 0.25s;
    background: linear-gradient(45deg, ${mainColor}, ${subColor});
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, 0, 0);
    width: 0;
    z-index: 1;
  }

  span {
    animation: ${fadeIn} 0.1s 0.6s forwards, ${gradAnimation} 4s infinite;
    background: linear-gradient(45deg, ${mainColor}, ${subColor});
    background-size: 500% 500%;
    color: ${mainColor};
    font: bold italic 40px ${deco};
    opacity: 0;
    padding-inline-end: 0.5em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: ${mediaS}) {
      font-size: 60px;
    }
    @media (min-width: ${mediaM}) {
      font-size: 70px;
    }

    &::after {
      animation: ${gradAnimation} 4s infinite;
      background: linear-gradient(45deg, ${mainColor}, ${subColor});
      background-size: 500% 500%;
      content: "";
      display: inline-block;
      height: 3px;
      margin-inline-start: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 150px;
    }
  }
`

// const LeadTitle = styled.h3`
//   font: bold 25px ${serif};
//   text-align: center;
// `

const Lead = styled.p`
  animation: ${fadeIn} 1s 1.8s forwards;
  color: #282f35;
  font: bold 16px ${serif};
  margin: 0 auto 50px;
  opacity: 0;
  transform: translateY(15px);
  width: 80%;
  @media (min-width: ${mediaM}) {
    font-size: 18px;
    text-align: center;
    width: 85%;
  }

  span {
    color: ${mainColor};
  }
`

const Grid = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;
  margin: 0 auto 80px;
  place-items: center;
  width: 80%;
  @media (min-width: ${mediaS}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${mediaM}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  div {
    animation: ${fadeIn} 0.5s forwards;
    background: ${mainOpColor};
    height: 100px;
    opacity: 0;
    position: relative;
    transform: translateY(2px);
    width: 100%;
    &::before {
      content: "LOGO";
      display: inline-block;
      font: bold italic 16px ${deco};
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &:nth-of-type(1) {
      animation-delay: 3s;
    }
    &:nth-of-type(2) {
      animation-delay: 3.1s;
    }
    &:nth-of-type(3) {
      animation-delay: 3.2s;
    }
    &:nth-of-type(4) {
      animation-delay: 3.3s;
    }
    &:nth-of-type(5) {
      animation-delay: 3.4s;
    }
    &:nth-of-type(6) {
      animation-delay: 3.5s;
    }
    &:nth-of-type(7) {
      animation-delay: 3.6s;
    }
    &:nth-of-type(8) {
      animation-delay: 3.7s;
    }
    &:nth-of-type(9) {
      animation-delay: 3.8s;
    }
  }
`

const Fv = () => (
  <Wrap>
    <Heading>
      <span>ZBMHD Group</span>
    </Heading>
    {/* <LeadTitle>経営方針</LeadTitle> */}
    <Lead>
      既存の枠組みに囚われず、柔軟な発想を前提とした商品・サービスの開発を、
      <br className="tab__none" />
      グループ全体で取組んでいます。
      <br />
      その為に、経営者を含む全社員は、経験則に囚われない、
      <br className="tab__none" />「<span>ゼロベース思考</span>
      」の発想を大切にしていきます。
    </Lead>
    <Grid>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Grid>
  </Wrap>
)

export default Fv