import { useRouter } from '@hooks/useRouter';
import { Button } from '@mui/material';
import { useSectionScrollers } from '@sections/home/Context';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map } from 'lodash';
import React from 'react';

import { DRAWER_BUTTONS, MenuSectionItem } from './DrawerMenu';

const DesktopSectionButton = (
  props: MenuSectionItem & { onClick: () => void }
) => {
  const { title, id } = props;
  const scrollers = useSectionScrollers();
  const handleScrollToSection = scrollers[id];

  const { t } = useTranslation();

  return (
    <Button color="grey" onClick={handleScrollToSection}>
      {t(`SectionButtons.${title}`)}
    </Button>
  );
};

const DesktopSectionButtons = () => {
  const { route } = useRouter();
  const scrollers = useSectionScrollers();

  const isHomePage = route === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <>
      {map(DRAWER_BUTTONS, (link) => {
        const { id } = link;
        const handleScrollToSection = scrollers[id];

        return (
          <DesktopSectionButton
            {...link}
            onClick={handleScrollToSection}
            key={id}
          />
        );
      })}
    </>
  );
};

export default DesktopSectionButtons;
