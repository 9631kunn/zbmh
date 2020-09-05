import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Fv from "../components/Index/Fv"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" location={props.location} />
    <Fv />
  </Layout>
)

export default IndexPage
