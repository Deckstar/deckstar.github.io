import { IGatsbyImageData } from 'gatsby-plugin-image';
import { ReactNode } from 'react';

export interface SkillItem {
  name: string;
  href?: string;
  src?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  extra?: ReactNode;
  subSkills?: SkillItem[];
}

export interface SkillCardProps {
  title: string;
  skillItems: SkillItem[];
}
