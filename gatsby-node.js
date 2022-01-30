const { createRemoteFileNode } = require('gatsby-source-filesystem');

/** @param {import('gatsby').CreateSchemaCustomizationArgs }*/
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type DevArticles implements Node {
      id: ID!
      article: Article
      featuredImg: File @link(from: "fields.featuredImg")
    }

    type Article {
      url: String
      title: String
      tags: [String]
      description: String
      cover_image: String
      social_image: String
      published_at(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date
      positive_reactions_count: Int
    }
  `);
};

/** @param {import('gatsby').CreateNodeArgs } args */
exports.onCreateNode = async (args) => {
  const { node, actions, getCache, createNodeId } = args;

  const { createNode, createNodeField } = actions;

  if (
    node.internal.type === 'DevArticles' &&
    (node.article.cover_image || node.article.social_image)
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.article.cover_image || node.article.social_image,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    if (fileNode) {
      const nodeField = { node, name: 'featuredImg', value: fileNode.id };
      createNodeField(nodeField);
    }
  }
};

const path = require('path');

/** @param {import('gatsby').CreateWebpackConfigArgs }*/
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@i18n': path.resolve(__dirname, 'src/i18n'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@sections': path.resolve(__dirname, 'src/sections'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@typescript': path.resolve(__dirname, 'src/typescript'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
