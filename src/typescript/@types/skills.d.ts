import { ReactNode } from 'react';

export interface SkillItem {
  name: string;
  src?: { childImageSharp: any };
  extra?: ReactNode;
  subSkills?: SkillItem[];
}

export interface SkillCardProps {
  title: string;
  skillItems: SkillItem[];
}
