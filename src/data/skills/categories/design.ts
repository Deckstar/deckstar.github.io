import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const design: SkillCardProps = {
  title: 'Design',
  skillItems: [
    {
      name: 'Adobe Creative Cloud',
      src: logos.adobeCreativeCloud,
      subSkills: [
        {
          name: 'Photoshop',
          src: logos.photoshop,
        },
        {
          name: 'Illustrator',
          src: logos.illustrator,
        },
        {
          name: 'Audition',
          src: logos.audition,
        },
      ],
    },
    {
      name: 'Sketch',
      src: logos.sketch,
      extra: 'UI / UX design',
    },
  ],
};

export default design;
