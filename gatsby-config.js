/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
  ],
};
