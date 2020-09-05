import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./Header"
import Main from "./Main"
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

  console.log(...children)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header siteTitle={title} />
      <Main>{children}</Main>
      <Footer siteTitle={title} />
    </ThemeProvider>
  )
}

export default Layout
