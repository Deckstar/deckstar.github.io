import React, { memo, useState } from 'react';
import { JackInTheBox } from 'react-awesome-reveal';
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Container,
  Paper,
  Link,
  Typography,
} from '@material-ui/core';
import {
  CalendarToday as DateIcon,
  FavoriteBorder as LoveIcon,
  Launch as LinkIcon,
} from '@material-ui/icons';
import dayjs from 'dayjs';
import { GatsbyImageProps } from 'gatsby-image';
import { map } from 'lodash';
import useStyles from './Blog.style';
import { education } from '@images';

interface Article {
  id: string;
  featuredImg: { childImageSharp: GatsbyImageProps } | string;
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

const tempArticles: Article[] = [
  {
    id: '1',
    featuredImg: education.SSE,
    article: {
      url: 'https://www.hhs.se',
      tags: ['sweden', 'finance', 'pseudoscience'],
      title: 'Stockholm School of Economics',
      description: 'A school full of BS',
      published_at: dayjs('2019-10-20').format('DD MMMM YYYY'),
      positive_reactions_count: 5,
    },
  },
  {
    id: '2',
    featuredImg: education.UCL,
    article: {
      url: 'https://www.ucl.co.uk',
      tags: ['london', 'economics', 'awesome'],
      title: 'University College London',
      description: 'Third year was the best year ever!',
      published_at: dayjs('2017-07-13').format('DD MMMM YYYY'),
      positive_reactions_count: 52,
    },
  },
  {
    id: '3',
    featuredImg: education.leRosey,
    article: {
      url: 'https://www.google.com',
      tags: ['rich kids', 'switzerland', 'languages'],
      title: 'Le Rosey',
      description: 'Best school in the world, but full of too many douchebags',
      published_at: dayjs('2014-06-19').format('DD MMMM YYYY'),
      positive_reactions_count: 3,
    },
  },
];

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
      <CardMedia
        image={featuredImg}
        title="Stockholm School of Economics"
        className={classes.cardPhoto}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.cardTitle}>{title}</Typography>
        <Box className={classes.cardDateContainer}>
          <DateIcon fontSize="inherit" />
          <Typography className={classes.cardDate}>{published_at}</Typography>
        </Box>
        <Typography variant="body2" className={classes.cardCaption}>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        <Box className={classes.cardButtons}>
          <Link href={url} target="_blank">
            <Button size="small" color="primary">
              <LinkIcon />
            </Button>
          </Link>
          <Badge
            badgeContent={positive_reactions_count}
            color="secondary"
            classes={{ badge: classes.cardHeartCount }}
          >
            <LoveIcon />
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

  return (
    <Box component="section" className={classes.container} id="blog">
      <Container>
        <Typography variant="h3" className={classes.title}>
          Blog
        </Typography>
        <Paper className={classes.postsContainer} elevation={10}>
          {map(tempArticles, (post) => {
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
