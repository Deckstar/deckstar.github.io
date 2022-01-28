import { DRAWER_BUTTONS } from '@components/Navbar/DrawerMenu';
import { FindInPage } from '@mui/icons-material';
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialClasses,
  Zoom,
} from '@mui/material';
import { useSectionScrollers } from '@sections/home/Context';
import { makeStyles } from '@theme/themes';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { map, reverse } from 'lodash';
import React, { useMemo } from 'react';

const useStyles = makeStyles()((theme) => ({
  speedDial: {
    color: theme.palette.text.primary,
  },
}));

interface Props {
  trigger: boolean;
}

const QuickScrollButton = (props: Props) => {
  const { trigger } = props;
  const { classes } = useStyles();
  const { t } = useTranslation();
  const scrollers = useSectionScrollers();

  const speedDialActions = useMemo(() => reverse([...DRAWER_BUTTONS]), []);

  const speedDialClasses = useMemo<Partial<SpeedDialClasses>>(
    () => ({ fab: classes.speedDial }),
    [classes]
  );

  return (
    <Zoom in={trigger}>
      <SpeedDial
        classes={speedDialClasses}
        ariaLabel="Quick scroll"
        icon={<FindInPage />}
      >
        {map(speedDialActions, (section) => {
          const { id, Icon, title } = section;
          const handleScrollToSection = scrollers[id];

          return (
            <SpeedDialAction
              key={id}
              icon={<Icon />}
              onClick={handleScrollToSection}
              tooltipOpen
              tooltipTitle={t(`SectionButtons.${title}`)}
            />
          );
        })}
      </SpeedDial>
    </Zoom>
  );
};

export default QuickScrollButton;
