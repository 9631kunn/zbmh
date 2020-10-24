import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const mainColor = (props) => props.theme.color.main;
const container = (props) => props.theme.container.footer;

const Wrap = styled.footer`
  background: ${mainColor};
`;

const Container = styled.div`
  margin: auto;
  max-width: ${container};
  padding: 20px;
  text-align: center;
  width: 100%;
  a {
    color: #fff;
    display: block;
    margin-block-end: 20px;
    text-decoration: none;
  }
  small {
    color: #fff;
    font-size: 12px;
  }
  .gototop {
    appearance: none;
    background: ${mainColor};
    border: none;
    border-radius: 50%;
    bottom: 40px;
    color: #fff;
    cursor: pointer;
    line-height: 40px;
    opacity: 0.5;
    position: fixed;
    right: 20px;
    width: 40px;
  }
`;

const Footer = ({ siteTitle }) => {
  const gotoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrap>
      <Container>
        <Link to="/">
          <p>HOME</p>
        </Link>
        <small>
          © {new Date().getFullYear()} {siteTitle}
        </small>
        <button className="gototop" onClick={gotoTop}>
          ▲
        </button>
      </Container>
    </Wrap>
  );
};

export default Footer;
