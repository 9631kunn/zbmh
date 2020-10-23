import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading';

const mediaS = (props) => props.theme.media.s;
const mediaM = (props) => props.theme.media.m;
const mainColor = (props) => props.theme.color.main;
const serif = (props) => props.theme.font.serif;

const Wrap = styled.div`
  font-family: ${serif};
  margin: 80px 0;
  padding-block-end: 40px;
  @media (min-width: ${mediaS}) {
    padding-block-end: 50px;
  }
  @media (min-width: ${mediaM}) {
    padding-block-end: 60px;
  }
`;
const Description = styled.div`
  margin-block-end: 80px;
  h2 {
    color: ${mainColor};
    margin: 60px 0 20px;
  }
`;
const FlowWrap = styled.div`
  margin: 40px 0;
  h2 {
    border-block-end: 3px solid ${mainColor};
    margin-block-end: 20px;
  }
  ul {
    list-style: none;
    margin-block-end: 30px;
    li {
      margin-block-end: 1em;
      &::before {
        color: ${mainColor};
        content: '◆';
        display: inline-block;
        margin-inline-end: 10px;
      }
    }
  }
`;
const Flow = styled.ol`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  list-style: none;
  margin: 40px 0;
  li {
    display: flex;
    justify-content: center;
    width: 200px;
    figure {
      img {
        height: 130px;
        width: 180px;
      }
      figcaption {
        text-align: center;
        span {
          color: ${mainColor};
          font-weight: bold;
        }
        small {
          display: block;
        }
      }
    }
  }
  @media (max-width: ${mediaM}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${mediaS}) {
    grid-template-columns: 1fr;
  }
`;

const Main = () => {
  return (
    <Wrap>
      <Heading>
        <span>Our Works</span>
      </Heading>
      <Description>
        <h2>1. グループ管理</h2>
        <p>
          グループ全体の管理・運営を、効率よく行います。
          そして、最大限の力を発揮できる様、今後も様々な企業と関係強化に努めて行きます。
        </p>
        <h2>2.放送受信料の契約および収納業務</h2>
        <p>
          担当エリアのお客様（個人・事業所）に訪問し、新規契約・住所変更などの手続きや、受信料の集金をするお仕事になります。
          未経験でも大丈夫、決して難しい仕事ではありません。経験豊富な先輩スタッフが「ゆっくり・丁寧」に指導いたしますのでご安心ください。少しでもご興味がある方は、是非お気軽にお問い合わせ・ご応募ください。
        </p>
      </Description>
      <FlowWrap>
        <h2>お仕事イメージ（1日の流れ）</h2>
        <ul>
          <li>
            <strong>競合他社は居ません！</strong>みなさんには担当地域をお渡しします。
          </li>
          <li>
            <strong>スマホ感覚の専用端末使用！</strong>地図内蔵のかんたん操作です。
          </li>
          <li>
            <strong>服装は基本自由！</strong>動きやすい格好が一番、スーツでなくとも構いません。
          </li>
        </ul>
        <p>以下はある1日における基本的な仕事の大まかな流れになりますのでご参考ください。</p>
        <Flow>
          <li>
            <figure>
              <img src="/assets/flow01.png" alt="flow" />
              <figcaption>
                <span>10:00～12:00出社</span>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="/assets/flow02.png" alt="flow" />
              <figcaption>
                <span>軽～くミーティング</span>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="/assets/flow03.png" alt="flow" />
              <figcaption>
                <span>担当地域での活動</span>
                <small>
                  コツコツと実働7時間以上
                  <br />
                  休憩60分（30分×2回でもOK）
                </small>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="/assets/flow04.png" alt="flow" />
              <figcaption>
                <span>19:00～21:00帰社</span>
                <small>一日お疲れ様でした</small>
              </figcaption>
            </figure>
          </li>
        </Flow>
        <p>
          ※営業交通費はSuicaをお渡ししますので、自分で立替える必要はありません。自転車も貸与します。バイク持込の場合はご相談ください。
        </p>
      </FlowWrap>
    </Wrap>
  );
};

export default Main;
