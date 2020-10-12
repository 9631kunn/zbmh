import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Fv from "../components/Index/Fv"
import AboutUs from "../components/Index/AboutUs"
import Contact from "../components/Index/Contact"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" location={props.location} />
    <Fv />
    <AboutUs />
    <Contact />
  </Layout>
)

export default IndexPage
