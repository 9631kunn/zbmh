import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Heading from '../Heading';

const serif = (props) => props.theme.font.serif;

const Wrap = styled.div`
  font-family: ${serif};
  margin: 80px 0;
  width: 100%;
`;

const LinkWrap = styled.div`
  margin: 30px 0;
  text-align: right;
  a {
    border: 1px solid #333;
    border-radius: 3px;
    color: inherit;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: 0.3s opacity;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const Works = () => (
  <Wrap>
    <Heading>
      <span>Our Works</span>
    </Heading>
    <p>
      グループ全体の管理・運営を、効率よく行います。
      そして、最大限の力を発揮できる様、今後も様々な企業と関係強化に努めて行きます。
    </p>
    <LinkWrap>
      <Link to="/our-works">もっと見る</Link>
    </LinkWrap>
  </Wrap>
);

export default Works;
