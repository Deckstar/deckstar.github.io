import { GatsbyImageProps } from 'gatsby-image';

export interface ExperienceItemProps {
  location: string;
  locationFlag: { childImageSharp: GatsbyImageProps };
  title: string;
  logo: { childImageSharp: GatsbyImageProps };
  dates: string;
  description: string;
}
