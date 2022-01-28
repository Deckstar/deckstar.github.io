import photos from '@images/exportPhotos';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { concat } from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Site {
  siteMetadata: {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
  };
}

interface Image {
  src: string;
  height: number;
  width: number;
}

interface StaticItems {
  site: Site;
  image: Image;
}

interface SEOProps {
  description?: string;
  meta?: HTMLMetaElement[];
  title?: string;
  pathname?: string;
}

const SEO = (props: SEOProps) => {
  const { description = '', meta = [], title, pathname } = props;

  const { language } = useI18next();

  const { site, image: metaImage } = useStaticQuery<StaticItems>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        image: file(relativePath: { eq: "photos/thumbnail.png" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : photos.thumbnail;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{ lang: language }}
      title={title}
      titleTemplate={
        pathname === '/'
          ? defaultTitle
          : defaultTitle
          ? `%s | ${defaultTitle}`
          : undefined
      }
      defaultTitle={defaultTitle}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={concat(
        metaImage
          ? [
              {
                property: 'og:image',
                content: image,
              },
              {
                property: 'og:image:width',
                content: metaImage.width,
              },
              {
                property: 'og:image:height',
                content: metaImage.height,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            ]
          : [
              {
                name: 'twitter:card',
                content: 'summary',
              },
            ],
        [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title || defaultTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title || defaultTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ],
        meta
      )}
    />
  );
};

export default SEO;
