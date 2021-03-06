/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteUrl =
  process.env.URL || process.env.DEPLOY_URL || `https://deckstar.github.io`;

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Dexter Sibirtsev | Portfolio`,
    description: `Full-stack software developer from Tallinn, Estonia. Web and mobile app development (full time).`,
    author: `Deckstar`,
    siteUrl,
  },
  plugins: [
    {
      pathPrefix: `/`,
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@context': 'src/context',
          '@data': 'src/data',
          '@images': 'src/images',
          '@i18n': 'src/i18n',
          '@pages': 'src/pages',
          '@sections': 'src/sections',
          '@theme': 'src/theme',
          '@typescript': 'src/typescript',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `deckstar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
};
