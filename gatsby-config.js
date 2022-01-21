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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages: ['en', 'de', 'es', 'et', 'fr', 'hu', 'ru', 'se'],
        defaultLanguage: 'en',
        siteUrl,
        i18nextOptions: {
          defaultNS: 'common',
          // debug: true,
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          nsSeparator: false,
        },
        pages: [],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-preload-fonts`,
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
