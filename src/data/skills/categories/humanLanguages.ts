import { flags } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const humanLanguages: SkillCardProps = {
  title: 'Human languages',
  skillItems: [
    {
      name: 'English',
      src: flags.UK,
      extra: 'first language',
    },
    {
      name: 'Estonian',
      src: flags.Estonia,
      extra: 'native',
    },
    {
      name: 'Russian',
      src: flags.Russia,
      extra: 'native',
    },
    {
      name: 'French',
      src: flags.France,
      extra: 'conversational, B2',
    },
    {
      name: 'Spanish',
      src: flags.Spain,
      extra: 'conversational, B2',
    },
    {
      name: 'Plus some basic:',
      subSkills: [
        {
          name: 'German',
          src: flags.Germany,
        },
        {
          name: 'Hungarian',
          src: flags.Hungary,
        },
        {
          name: 'Swedish',
          src: flags.Sweden,
        },
        {
          name: 'Japanese',
          src: flags.Japan,
        },
      ],
    },
  ],
};

export default humanLanguages;
