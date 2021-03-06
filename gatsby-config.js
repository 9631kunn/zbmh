module.exports = {
  siteMetadata: {
    lang: 'ja',
    title: `株式会社ゼロベースマネジメントホールディングス`,
    siteUrl: 'https://zbmh.co.jp',
    description: `株式会社ゼロベースマネジメントホールディングスの公式ホームページです。`,
    companyName: '株式会社ゼロベースマネジメントホールディングス',
    founder: '太田　吉信', // 創業者名
    foundingDate: '平成31年10月2日', // 設立日
    telephone: '+810352496015', // 電話番号
    telephone2: '03-5249-6015', // 電話番号
    faxNumber: '', // FAX番号（先頭に"+81-"）
    addressLocality: '北区', // 市町村区
    addressRegion: '東京都', // 都道府県
    postalCode: '115-0045', // 郵便番号
    streetAddress: '赤羽2－39－5', // 番地
    addressCountry: 'JP',
    copyrightYear: '2020-09-07T00:00:00+0000',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: 'icons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
