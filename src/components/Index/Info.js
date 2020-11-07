import React from 'react';

import Image from '../Image';

import styled from 'styled-components';

const media = (props) => props.theme.media.m;
const serif = (props) => props.theme.font.serif;

const Wrap = styled.div`
  align-items: center;
  background: #fff;
  display: grid;
  font-family: ${serif};
  gap: 20px;
  grid-template-columns: 70px 1fr;
  padding: 60px 30px;
  @media (min-width: ${media}) {
  }
  .leagal,
  .npo {
    img {
      object-fit: contain !important;
    }
  }
  .leagal {
    img {
      left: 50% !important;
      transform: translateX(-50%);
      width: 30px !important;
    }
  }
  .npo {
    img {
      width: 70px !important;
    }
  }
`;

const Info = () => (
  <Wrap>
    <Image filename="leagal.png" className="leagal" alt="ベリーベスト法律事務所ロゴ" />
    <p>株式会社ゼロベースマネジメントホールディングスはベリーベスト法律事務所と顧問契約を締結してます。</p>
    <Image filename="npo.jpg" className="npo" alt="認定特定非営利活動法人カタリバロゴ" />
    <p>株式会社ゼロベースマネジメントホールディングスは認定特定非営利活動法人カタリバの活動を支援しています。</p>
  </Wrap>
);

export default Info;
