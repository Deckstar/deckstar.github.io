import { IconType } from 'react-icons';
import { FaGithub, FaGoodreads, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  title: string;
  url: string;
  Icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    title: 'Twitter',
    url: 'https://twitter.com/DexterSibirtsev',
    Icon: FaTwitter,
  },
  {
    title: 'Github,',
    url: 'https://github.com/Deckstar',
    Icon: FaGithub,
  },
  {
    title: 'Goodreads',
    url: 'https://www.goodreads.com/user/show/58196314-dexter',
    Icon: FaGoodreads,
  },
];

export default socialLinks;
