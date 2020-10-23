import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

import Heading from '../Heading';

const mainColor = (props) => props.theme.color.main;
const deco = (props) => props.theme.font.deco;
const serif = (props) => props.theme.font.serif;

const Wrap = styled.div`
  margin: 80px 0;
  width: 100%;
  h2 {
    color: ${mainColor};
    font: bold italic 30px ${deco};
    margin-block-end: 40px;
  }
`;
const Table = styled.table`
  font-family: ${serif};
  width: 100%;
  th {
    min-width: 100px;
    padding: 0.5em;
    width: 30%;
  }
  td {
    padding: 1em;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
const Map = styled.div`
  height: 0;
  margin: 30px 0;
  overflow: hidden;
  padding-block-end: 56.25%;
  position: relative;
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query AboutUsQuery {
      site {
        siteMetadata {
          title
          founder
          postalCode
          addressRegion
          addressLocality
          streetAddress
          telephone
          telephone2
        }
      }
    }
  `);
  const {
    title,
    founder,
    postalCode,
    addressRegion,
    addressLocality,
    streetAddress,
    telephone,
    telephone2,
  } = data.site.siteMetadata;

  return (
    <Wrap>
      <Heading>
        <span>About Us</span>
      </Heading>
      <Table>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>{title}</td>
          </tr>
          <tr>
            <th>本社</th>
            <td>〒{postalCode + ' ' + addressRegion + addressLocality + streetAddress}</td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>
              <a href={`tel:${telephone}`}>{telephone2}</a>
            </td>
          </tr>
          <tr>
            <th>池袋オフィス</th>
            <td>〒171-0014 東京都豊島区池袋2丁目17-8 池袋西口 ANNEX2階</td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>{founder}</td>
          </tr>
          <tr>
            <th>取締役</th>
            <td>宮本　正樹</td>
          </tr>
          <tr>
            <th>顧問</th>
            <td>ベリーベスト法律事務所、田口通税理士事務所、アクト労務経営センター</td>
          </tr>
        </tbody>
      </Table>
      <Map>
        <iframe
          title="事業所マップ"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6477.471000810211!2d139.706275!3d35.732723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d592da4673f%3A0x8173aa037eab40cb!2z44CSMTcxLTAwMTQg5p2x5Lqs6YO96LGK5bO25Yy65rGg6KKL77yS5LiB55uu77yR77yX4oiS77yY!5e0!3m2!1sja!2sjp!4v1603414386682!5m2!1sja!2sjp"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          loading="lazy"
        ></iframe>
      </Map>
    </Wrap>
  );
};

export default AboutUs;
