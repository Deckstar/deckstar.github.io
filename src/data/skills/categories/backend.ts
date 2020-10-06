import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const backend: SkillCardProps = {
  title: 'Backend',
  skillItems: [
    {
      name: 'Django',
      src: logos.django,
      subSkills: [
        {
          name: 'Graphene',
          src: logos.graphene,
        },
      ],
    },
    {
      name: 'GraphQL',
      src: logos.graphql,
    },
    {
      name: 'NodeJS',
      src: logos.node,
      extra: 'with Express',
      subSkills: [
        {
          name: 'Mongoose',
          src: logos.mongoose,
        },
      ],
    },
  ],
};

export default backend;
