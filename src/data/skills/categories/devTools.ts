import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const devTools: SkillCardProps = {
  title: 'Dev tools',
  skillItems: [
    {
      name: 'Docker',
      src: logos.docker,
      extra: 'containerization',
    },
    {
      name: 'Git',
      src: logos.git,
      subSkills: [
        {
          name: 'Github',
          src: logos.github,
        },
        {
          name: 'Bitbucket',
          extra: '',
          src: logos.bitbucket,
        },
      ],
    },
    {
      name: 'Task management',
      subSkills: [
        {
          name: 'Jira',
          src: logos.jira,
        },
        {
          name: 'Asana',
          src: logos.asana,
        },
      ],
    },
    {
      name: 'Postman',
      src: logos.postman,
      extra: 'easy HTTP requests',
    },
    {
      name: 'Xcode',
      src: logos.xcode,
      extra: 'iOS development',
    },
    {
      name: 'Android Studio',
      src: logos.androidStudio,
      extra: 'Android development',
    },
    {
      name: 'Lodash',
      src: logos.lodash,
    },
  ],
};

export default devTools;
