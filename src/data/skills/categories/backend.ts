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
      name: 'Apollo Server',
      src: logos.apolloServer,
      subSkills: [
        {
          name: 'TypeGraphQL',
          src: logos.typeGraphQL,
        },
        {
          name: 'TypeORM',
          src: logos.typeORM,
        },
      ],
    },
    {
      name: 'NodeJS',
      src: logos.node,
      subSkills: [
        {
          name: 'Express',
          src: logos.express,
        },
        {
          name: 'Mongoose',
          src: logos.mongoose,
        },
      ],
    },
    {
      name: 'Redis',
      src: logos.redis,
    },
  ],
};

export default backend;
