const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type DevArticles implements Node {
      id: ID!
      article: Article
      featuredImg: File @link(from: "featuredImg___NODE")
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

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (
    node.internal.type === 'DevArticles' &&
    (node.article.cover_image !== null || node.article.social_image !== null)
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.article.cover_image || node.article.social_image,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });

    if (fileNode) {
      node.featuredImg___NODE = fileNode.id;
    }
  }
};

const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@context': path.resolve(__dirname, 'src/context'),
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
