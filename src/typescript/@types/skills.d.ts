import { ReactNode } from 'react';
import { GatsbyImageProps } from 'gatsby-image';

export interface SkillItem {
  name: string;
  src?: { childImageSharp: GatsbyImageProps };
  extra?: ReactNode;
  subSkills?: SkillItem[];
}

export interface SkillCardProps {
  title: string;
  skillItems: SkillItem[];
}
