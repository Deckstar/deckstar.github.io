import {
  CalendarToday as DateIcon,
  FavoriteBorder as LoveIcon,
  Launch as LaunchIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage, { GatsbyImageProps } from 'gatsby-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import useStyles from './Blog.style';

// for a full list of props, see graphiql interface. These are just the props we need right now.
interface Article {
  id: string;
  featuredImg: { childImageSharp: GatsbyImageProps };
  article: {
    url: string;
    tags: string[];
    title: string;
    description: string;
    published_at: string;
    positive_reactions_count: number;
  };
}
interface BlogPostProps extends Article {
  display?: boolean;
}

const Post = (props: BlogPostProps) => {
  const classes = useStyles();

  const { id, article, featuredImg } = props;
  const {
    url,
    tags,
    title,
    description,
    published_at,
    positive_reactions_count,
  } = article;

  return (
    <Card elevation={3} className={classes.cardContainer}>
      <Link href={url} target="_blank" className={classes.cardPhotoContainer}>
        <GatsbyImage
          className={classes.cardPhoto}
          {...featuredImg.childImageSharp}
        />
        <Box className={classes.cardPhotoOverlay}>
          <Button color="primary">
            <LinkIcon
              fontSize="large"
              classes={{ fontSizeLarge: classes.cardPhotoLinkIcon }}
            />
          </Button>
        </Box>
      </Link>
      <CardContent className={classes.cardContent}>
        <Link href={url} target="_blank" color="inherit">
          <Typography className={classes.cardTitle}>{title}</Typography>
        </Link>
        <Box className={classes.cardDateContainer}>
          <DateIcon fontSize="inherit" />
          <Typography className={classes.cardDate}>
            {dayjs(published_at).format('DD MMMM YYYY')}
          </Typography>
        </Box>
        <Typography variant="body2" className={classes.cardCaption}>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        <Box className={classes.cardButtons}>
          <Link href={url} target="_blank">
            <Button size="small" color="primary">
              <LaunchIcon />
            </Button>
          </Link>
          <Badge
            badgeContent={positive_reactions_count}
            color="secondary"
            classes={{ badge: classes.cardHeartCount }}
          >
            <Tooltip
              arrow
              title={`${positive_reactions_count} reactions`}
              enterTouchDelay={0}
            >
              <LoveIcon />
            </Tooltip>
          </Badge>
        </Box>
        <Box className={classes.cardArticleTags}>
          {map(tags, (tag) => {
            return (
              <Typography
                key={`post ${id} tag ${tag}`}
                variant="subtitle2"
                className={classes.cardTag}
              >
                #{tag}
              </Typography>
            );
          })}
        </Box>
      </CardActions>
    </Card>
  );
};

const Blog = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      allDevArticles(
        sort: { fields: [article___published_at], order: DESC }
        limit: 6
      ) {
        nodes {
          id
          article {
            url
            tags
            title
            description
            published_at
            positive_reactions_count
          }
          featuredImg {
            childImageSharp {
              fluid(maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const devArticles: Article[] = data.allDevArticles.nodes;

  return (
    <Box component="section" className={classes.container} id="blog">
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Blog.Blog')}
        </Typography>
        <Paper className={classes.postsContainer} elevation={10}>
          {map(devArticles, (post) => {
            const { id } = post;
            return <Post {...post} key={`article ${id}`} />;
          })}

          {/* Without this end dot, the last article touches the right wall of the scroll container */}
          <Box className={classes.dummyDivForPaddingToWork}>.</Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Blog;
