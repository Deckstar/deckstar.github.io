import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ExperienceItemProps {
  location: string;
  locationFlag: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
  title: string;
  name: string;
  href: string | null;
  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
  dates: { start: string; end: string | null }[];
  description: string;
}
