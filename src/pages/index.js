import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Fv from "../components/Index/Fv"
import AboutUs from "../components/Index/AboutUs"
import Contact from "../components/Index/Contact"
import Info from "../components/Index/Info"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" location={props.location} />
    <Fv />
    <AboutUs />
    <Contact />
    <Info />
  </Layout>
)

export default IndexPage
