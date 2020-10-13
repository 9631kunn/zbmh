import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Heading from "../Heading"

const mainColor = props => props.theme.color.main
const deco = props => props.theme.font.deco
const serif = props => props.theme.font.serif

const Wrap = styled.div`
  margin: 80px 0;
  width: 100%;
  h2 {
    color: ${mainColor};
    font: bold italic 30px ${deco};
    margin-block-end: 40px;
  }
`

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
  }
`

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
        }
      }
    }
  `)
  const {
    title,
    founder,
    postalCode,
    addressRegion,
    addressLocality,
    streetAddress,
  } = data.site.siteMetadata

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
            <th>住所</th>
            <td>
              {postalCode +
                " " +
                addressRegion +
                addressLocality +
                streetAddress}
            </td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>{founder}</td>
          </tr>
          <tr>
            <th>取締役</th>
            <td>宮本正樹</td>
          </tr>
        </tbody>
      </Table>
    </Wrap>
  )
}

export default AboutUs
