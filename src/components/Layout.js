import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import SiteJson from "./JsonLd/Site"
import CompanyJson from "./JsonLd/Company"

import theme from "../styles/theme"
import GlobalStyle from "../styles/global"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SiteJson />
      <CompanyJson />
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <Footer siteTitle={title} />
    </ThemeProvider>
  )
}

export default Layout
