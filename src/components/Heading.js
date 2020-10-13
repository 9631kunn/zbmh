import React from "react"

import styled from "styled-components"
import fadeIn from "../styles/animation/fadeIn"
import gradAnimation from "../styles/animation/gradAnimation"
import progressBar from "../styles/animation/progressBar"
import "typeface-abel"
import "typeface-noto-serif-jp"

const mediaS = props => props.theme.media.s
const mediaM = props => props.theme.media.m
const mainColor = props => props.theme.color.main
const subColor = props => props.theme.color.sub
const deco = props => props.theme.font.deco

const Wrap = styled.h2`
  margin-block-end: 80px;
  overflow: hidden;
  position: relative;
  &.animation::before {
    /* アニメーション用のバー */
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
    font: bold italic 30px ${deco};
    opacity: 0;
    padding-inline-end: 0.5em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (min-width: ${mediaS}) {
      font-size: 35px;
    }
    @media (min-width: ${mediaM}) {
      font-size: 40px;
    }

    &::after {
      /* h2の横の棒 */
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
      width: 100px;
    }
  }
`

const Heading = ({ className, children }) => (
  <Wrap className={className}>{children}</Wrap>
)

export default Heading
