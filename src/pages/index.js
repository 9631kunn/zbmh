import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" location={props.location} />
    <p>TEST</p>
  </Layout>
)

export default IndexPage
