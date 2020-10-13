import React, { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import {
  Brightness4 as LightIcon,
  Brightness7 as DarkIcon,
} from '@material-ui/icons';
import { Context } from '@context';

const DarkModeIcon = (props: { darkMode: boolean }) => {
  const { darkMode } = props;

  if (darkMode) return <LightIcon />;
  return <DarkIcon />;
};

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(Context);

  return (
    <IconButton onClick={toggleDarkMode}>
      <DarkModeIcon darkMode={darkMode} />
    </IconButton>
  );
};

export default DarkModeToggle;
