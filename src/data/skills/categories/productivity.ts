import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const productivity: SkillCardProps = {
  title: 'Productivity & business',
  skillItems: [
    {
      name: 'Microsoft Office',
      subSkills: [
        {
          name: 'Word',
          src: logos.word,
        },
        {
          name: 'Excel',
          src: logos.excel,
        },
        {
          name: 'Powerpoint',
          src: logos.powerpoint,
        },
      ],
    },
  ],
};

export default productivity;
