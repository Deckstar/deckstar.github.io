import socialLinks from '@data/socialLinks';
import { useRouter } from '@hooks/useRouter';
import {
  AccountCircle as AboutIcon,
  AlternateEmail as ContactIcon,
  Build as SkillIcon,
  Description as BlogIcon,
  EmojiPeople as AcknowledgementsIcon,
  Home as HomeIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { Divider, IconButton, Link, MenuItem } from '@mui/material';
import { useSectionScrollers } from '@sections/home/Context';
import { ArrayElement } from '@typescript/@types/utils';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Link as GatsbyLink,
  useTranslation,
} from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React, { ComponentType } from 'react';

import useStyles from './Navbar.style';

interface MenuItemType {
  title: string;
  Icon: ComponentType;
}

interface MenuLinkItem extends MenuItemType {
  link: string;
}
export type MenuSectionItem = ArrayElement<typeof DRAWER_BUTTONS>;

export const DRAWER_BUTTONS = [
  {
    title: 'About',
    id: 'about',
    Icon: AboutIcon,
  },
  {
    title: 'Skills',
    id: 'skills',
    Icon: SkillIcon,
  },
  {
    title: 'Experience',
    id: 'experience',
    Icon: WorkIcon,
  },
  {
    title: 'Blog',
    id: 'blog',
    Icon: BlogIcon,
  },
  {
    title: 'Contact',
    id: 'contact',
    Icon: ContactIcon,
  },
] as const;

const PAGE_LINKS: MenuLinkItem[] = [
  {
    title: 'Home',
    link: '/',
    Icon: HomeIcon,
  },
  {
    title: 'Acknowledgements',
    link: '/acknowledgements',
    Icon: AcknowledgementsIcon,
  },
];

const DrawerLink = (props: MenuLinkItem) => {
  const { title, link, Icon } = props;

  const { t } = useTranslation();

  return (
    <Link component={GatsbyLink} to={link} color="inherit">
      <MenuItem>
        <IconButton disableRipple size="large">
          <Icon />
        </IconButton>
        {t(`PageLinks.${title}`)}
      </MenuItem>
    </Link>
  );
};

const HomePageSectionButton = (
  props: MenuSectionItem & { onClick: () => void }
) => {
  const { title, Icon, onClick } = props;

  const { t } = useTranslation();

  return (
    <MenuItem onClick={onClick}>
      <IconButton disableRipple size="large">
        <Icon />
      </IconButton>
      {t(`SectionButtons.${title}`)}
    </MenuItem>
  );
};

const HomePageSectionButtons = () => {
  const { route } = useRouter();
  const scrollers = useSectionScrollers();

  const isHomePage = route === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {map(DRAWER_BUTTONS, (section) => {
        const { id } = section;
        const handleScrollToSection = scrollers[id];

        return (
          <HomePageSectionButton
            {...section}
            onClick={handleScrollToSection}
            key={id}
          />
        );
      })}
      <Divider />
    </>
  );
};

const DrawerMenu = () => {
  const { classes } = useStyles();

  return (
    <div className={clsx(classes.grow, classes.drawerMenu)}>
      <div className={classes.drawerContainer}>
        <div className={classes.drawerLogoContainer}>
          <GatsbyLink to="/">
            <StaticImage
              src="../../images/icons/main.png"
              className={classes.drawerLogo}
              alt="DS"
            />
          </GatsbyLink>
        </div>

        <Divider />

        <HomePageSectionButtons />

        {map(PAGE_LINKS, (link) => {
          const { title } = link || {};
          return <DrawerLink {...link} key={title} />;
        })}
        <Divider />
      </div>
      <div className={classes.drawerFooter}>
        {map(socialLinks, (social) => {
          const { url, Icon, title } = social;
          return (
            <Link key={title} href={url}>
              <IconButton>
                <Icon color="secondary" width={26} height={26} />
              </IconButton>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DrawerMenu;
