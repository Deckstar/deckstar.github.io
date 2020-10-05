import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const dataMath: SkillCardProps = {
  title: 'Data & math',
  skillItems: [
    {
      name: 'Jupyter Notebooks',
      src: logos.jupyter,
      extra: 'Python data analysis',
    },
    {
      name: 'Mathematica',
      src: logos.mathematica,
      extra: 'Math & technical computing',
    },
  ],
};

export default dataMath;
