import { ReactNode } from 'react';

export interface SkillItem {
  name: string;
  src?: string;
  extra?: ReactNode;
  subSkills?: SkillItem[];
}

export interface SkillCardProps {
  title: string;
  skillItems: SkillItem[];
}
