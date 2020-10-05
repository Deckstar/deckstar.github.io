import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const programmingLanguages: SkillCardProps = {
  title: 'Programming languages',
  skillItems: [
    {
      name: 'Python',
      src: logos.python,
    },
    {
      name: 'JavaScript',
      src: logos.javascript,
      subSkills: [
        {
          name: 'TypeScript',
          src: logos.typescript,
        },
      ],
    },
    {
      name: 'Java',
      src: logos.java,
    },
    {
      name: 'Swift',
      src: logos.swift,
    },
    {
      name: 'Wolfram Language',
      src: logos.wolframLanguage,
    },
    {
      name: 'HTML & CSS',
      src: logos.HTMLandCSS,
    },
  ],
};

export default programmingLanguages;
