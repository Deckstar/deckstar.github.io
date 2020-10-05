import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const deployment: SkillCardProps = {
  title: 'Deployment',
  skillItems: [
    {
      name: 'Heroku',
      src: logos.heroku,
    },
    {
      name: 'Amazon Web Services',
      src: logos.aws,
    },
    {
      name: 'DigitalOcean',
      src: logos.digitalOcean,
    },
  ],
};

export default deployment;
