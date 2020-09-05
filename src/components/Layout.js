import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

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
      <Header siteTitle={title} />
      <main>{children}</main>
      <Footer siteTitle={title} />
    </ThemeProvider>
  )
}

export default Layout
