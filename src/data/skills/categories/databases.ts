import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const databases: SkillCardProps = {
  title: 'Databases',
  skillItems: [
    {
      name: 'MongoDB',
      src: logos.mongodb,
      extra: 'with Cloud Atlas',
    },
    {
      name: 'PostgreSQL',
      src: logos.pgadmin,
      subSkills: [
        {
          name: 'Postgres',
          src: logos.postgres,
        },
      ],
    },
    {
      name: 'Firebase',
      src: logos.firebase,
      extra: 'Cloud Firestore',
    },
    {
      name: 'SQLite3',
      src: logos.sqlite3,
    },
  ],
};

export default databases;
