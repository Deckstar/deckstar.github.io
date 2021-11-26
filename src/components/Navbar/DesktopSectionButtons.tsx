import { useRouter } from '@hooks/useRouter';
import { Button } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';
import { scroller } from 'react-scroll';

import { DRAWER_BUTTONS, MenuSectionItem } from './DrawerMenu';

export const handleScrollTo = (id: string) =>
  scroller.scrollTo(id, {
    offset: -50, // so navbar doesn't block view
    smooth: true,
  });

const DesktopSectionButton = (props: MenuSectionItem) => {
  const { title, id } = props;

  const { t } = useTranslation();

  return (
    <Button onClick={() => handleScrollTo(id)}>
      {t(`SectionButtons.${title}`)}
    </Button>
  );
};

const DesktopSectionButtons = () => {
  const { route } = useRouter();

  const isHomePage = route === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {map(DRAWER_BUTTONS, (link, i) => (
        <DesktopSectionButton {...link} key={`desktop link ${i}`} />
      ))}
    </>
  );
};

export default DesktopSectionButtons;
