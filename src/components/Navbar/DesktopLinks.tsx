import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Button } from '@material-ui/core';

import { scroller } from 'react-scroll';
import { map } from 'lodash';
import { DRAWER_BUTTONS, MenuLinkItem } from './DrawerMenu';
import { globalHistory } from '@reach/router';

export const handleScrollTo = (id: string) =>
  scroller.scrollTo(id, {
    offset: -50, // so navbar doesn't block view
    smooth: true,
  });

const DesktopLink = (props: MenuLinkItem) => {
  const { title, link } = props;

  const { t } = useTranslation();

  return (
    <Button onClick={() => handleScrollTo(link)}>
      {t(`SectionButtons.${title}`)}
    </Button>
  );
};

const DesktopLinks = () => {
  const path = globalHistory.location.pathname;

  const isHomePage = path === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {map(DRAWER_BUTTONS, (link, i) => (
        <DesktopLink {...link} key={`desktop link ${i}`} />
      ))}
    </>
  );
};

export default DesktopLinks;
