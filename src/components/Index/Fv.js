import React from 'react';

import styled from 'styled-components';
import fadeIn from '../../styles/animation/fadeIn';

import Heading from '../Heading';

const mediaS = (props) => props.theme.media.s;
const mediaM = (props) => props.theme.media.m;
const mainColor = (props) => props.theme.color.main;
const serif = (props) => props.theme.font.serif;
const deco = (props) => props.theme.font.deco;

const Wrap = styled.div`
  margin: 80px 0;
  overflow: hidden;
  padding-block-end: 40px;
  position: relative;
  @media (min-width: ${mediaS}) {
    padding-block-end: 50px;
  }
  @media (min-width: ${mediaM}) {
    padding-block-end: 60px;
  }

  &::before {
    /* 背景の大きな文字部分 */
    font: bold italic 70px ${serif};
    color: #efefef;
    content: 'Zero Base Management Holdings';
    left: 0;
    line-height: 1.1;
    opacity: 0.2;
    position: absolute;
    top: -20px;
    z-index: -1;
    @media (min-width: ${mediaS}) {
      font-size: 150px;
    }
  }

  &::after {
    /* メインエリアの最終部分 */
    bottom: 0;
    color: #efefef;
    content: 'ZBMHD Group';
    display: inline-block;
    font: bold italic 30px ${deco};
    line-height: 1;
    opacity: 0.75;
    position: absolute;
    right: 0;
    @media (min-width: ${mediaS}) {
      font-size: 35px;
    }
    @media (min-width: ${mediaM}) {
      font-size: 40px;
    }
  }
`;

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
`;

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
  div {
    animation: ${fadeIn} 0.5s forwards;
    border: 1px solid #efefef;
    height: 100px;
    max-width: 180px;
    opacity: 0;
    position: relative;
    transform: translateY(2px);
    width: 100%;
    a {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
      img {
        max-width: calc(100% - 10px);
        width: 100%;
      }
    }
    &.coming::before {
      content: 'Coming soon...';
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
`;

const Fv = () => (
  <Wrap>
    <Heading className="animation">
      <span>ZBMHD Group</span>
    </Heading>
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
      <div>
        <a href="https://npartners.co.jp/">
          <img src="/group-logo/npartners-logo.png" alt="" />
        </a>
      </div>
      <div>
        <a href="https://plaviswork.co.jp/">
          <img src="/group-logo/plaviswork-logo.png" alt="" />
        </a>
      </div>
      <div>
        <a href="https://career-m.co.jp/">
          <img src="/group-logo/career_m-logo.png" alt="" />
        </a>
      </div>
      <div>
        <a href="https://bizp.co.jp/">
          <img src="/group-logo/bp-logo.png" alt="" />
        </a>
      </div>
      <div className="coming" />
      <div className="coming" />
    </Grid>
  </Wrap>
);

export default Fv;
