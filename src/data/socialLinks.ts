import { Github, Goodreads } from '@components/Icons';
import { Email, SvgIconComponent } from '@mui/icons-material';

/** The current email address to use. */
export const EMAIL_ADDRESS = 'dexter.sibirtsev@gmail.com';

interface SocialLink {
  title: string;
  url: string;
  Icon: SvgIconComponent;
}

const socialLinks: SocialLink[] = [
  {
    title: 'Email,',
    url: `mailto:${EMAIL_ADDRESS}`,
    Icon: Email,
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
