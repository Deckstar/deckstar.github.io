import {
  CalendarToday as DateIcon,
  FavoriteBorder as LoveIcon,
  Launch as LaunchIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
import {
  Badge,
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
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import { useSectionRefs } from '../Context';
import useStyles from './Blog.style';

// for a full list of props, see graphiql interface. These are just the props we need right now.
interface Article {
  id: string;
  featuredImg: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
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
  const { classes } = useStyles();

  const { article, featuredImg } = props;
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
          alt={title}
          image={featuredImg?.childImageSharp?.gatsbyImageData}
        />
        <div className={classes.cardPhotoOverlay}>
          <Button color="primary">
            <LinkIcon
              fontSize="large"
              classes={{ fontSizeLarge: classes.cardPhotoLinkIcon }}
            />
          </Button>
        </div>
      </Link>
      <CardContent className={classes.cardContent}>
        <Link href={url} target="_blank" color="inherit">
          <Typography className={classes.cardTitle}>{title}</Typography>
        </Link>
        <div className={classes.cardDateContainer}>
          <DateIcon fontSize="inherit" />
          <Typography className={classes.cardDate}>
            {dayjs(published_at).format('DD MMMM YYYY')}
          </Typography>
        </div>
        <Typography variant="body2" className={classes.cardCaption}>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        <div className={classes.cardButtons}>
          <Link href={url} target="_blank">
            <Button size="small" color="primary">
              <LaunchIcon />
            </Button>
          </Link>
          <Badge
            badgeContent={positive_reactions_count}
            max={10 ** 5}
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
        </div>
        <div className={classes.cardArticleTags}>
          {map(tags, (tag) => {
            return (
              <Typography
                key={tag}
                variant="subtitle2"
                className={classes.cardTag}
              >
                #{tag}
              </Typography>
            );
          })}
        </div>
      </CardActions>
    </Card>
  );
};

const Blog = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { blog } = useSectionRefs();

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
              gatsbyImageData(layout: CONSTRAINED, height: 300)
            }
          }
        }
      }
    }
  `);

  const devArticles: Article[] = data.allDevArticles.nodes;

  return (
    <section ref={blog} id="blog" className={classes.container}>
      <Container>
        <Typography variant="h3" className={classes.title}>
          {t('Blog.Blog')}
        </Typography>
        <Paper className={classes.postsContainer} elevation={10}>
          {map(devArticles, (post) => {
            const { id } = post;
            return <Post {...post} key={id} />;
          })}

          {/* Without this end dot, the last article touches the right wall of the scroll container */}
          <div className={classes.dummyDivForPaddingToWork}>.</div>
        </Paper>
      </Container>
    </section>
  );
};

export default Blog;
