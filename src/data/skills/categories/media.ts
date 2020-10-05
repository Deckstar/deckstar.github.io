import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const media: SkillCardProps = {
  title: 'Media',
  skillItems: [
    {
      name: 'Final Cut Pro',
      src: logos.finalCutPro,
      extra: 'Video editing',
    },
    {
      name: 'Logic Pro',
      src: logos.logicPro,
      extra: 'Audio recording & mixing',
    },
    {
      name: 'Music notation',
      subSkills: [
        {
          name: 'Guitar Pro',
          src: logos.guitarPro,
        },
        {
          name: 'MuseScore',
          src: logos.musescore,
        },
      ],
    },
  ],
};

export default media;
