import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const SecondPage = props => (
  <Layout>
    <SEO title="Page two" location={props.location} />
  </Layout>
)

export default SecondPage
