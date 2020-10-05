import { logos } from '@images';
import { SkillCardProps } from '@typescript/@types/skills';

const frontend: SkillCardProps = {
  title: 'Frontend',
  skillItems: [
    {
      name: 'React',
      src: logos.react,
      subSkills: [
        {
          name: 'React Native',
          src: logos.reactNative,
        },
        {
          name: 'Redux',
          src: logos.redux,
          subSkills: [
            {
              name: 'Redux Saga',
              src: logos.reduxSaga,
            },
            {
              name: 'Redux Form',
              src: logos.reduxForm,
            },
          ],
        },
        {
          name: 'Apollo',
          src: logos.apollo,
        },
        {
          name: 'Gatsby',
          src: logos.gatsby,
        },
      ],
    },
    {
      name: 'WordPress',
      src: logos.wordpress,
    },
    {
      name: 'Svelte',
      src: logos.svelte,
      subSkills: [
        {
          name: 'Sapper',
          src: logos.sapper,
        },
      ],
    },
    {
      name: 'Electron',
      src: logos.electron,
    },
    {
      name: 'Bootstrap CSS',
      src: logos.bootstrap,
    },
    {
      name: 'Material UI',
      src: logos.materialUI,
    },
  ],
};

export default frontend;
