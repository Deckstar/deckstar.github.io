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
  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
  dates: string;
  description: string;
}
