import { Github, Goodreads, Twitter } from '@components/Icons';
import { SvgIconComponent } from '@mui/icons-material';

interface SocialLink {
  title: string;
  url: string;
  Icon: SvgIconComponent;
}

const socialLinks: SocialLink[] = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/DexterSibirtsev',
    Icon: Twitter,
  },
  {
    title: 'Github,',
    url: 'https://github.com/Deckstar',
    Icon: Github,
  },
  {
    title: 'Goodreads',
    url: 'https://www.goodreads.com/user/show/58196314-dexter',
    Icon: Goodreads,
  },
];

export default socialLinks;
