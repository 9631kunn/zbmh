import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ pageTitle, pageDescription, location }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          title
          siteUrl
          description
        }
      }
    }
  `)

  const path = location.pathname

  const { lang, title, siteUrl, description } = site.siteMetadata
  const metaTitle = path === "/" ? title : pageTitle + " | " + title
  const metaUrl = siteUrl + path
  const metaDescription = pageDescription || description

  return (
    <Helmet>
      <html lang={lang} />
      {/* <meta charset="utf-8" /> 自動生成 */}
      {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 自動生成 */}
      {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> 自動生成 */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="ja_JP" />
      <link rel="canonical" href={metaUrl} />
    </Helmet>
  )
}

export default Seo
