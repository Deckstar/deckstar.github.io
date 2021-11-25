import { Context } from '@context';
import { IconButton } from '@material-ui/core';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@material-ui/icons';
import React, { useContext } from 'react';

const DarkModeIcon = (props: { darkMode: boolean }) => {
  const { darkMode } = props;

  // if dark mode is on, show a moon
  if (darkMode) {
    return <DarkIcon />;
  }
  return <LightIcon />;
};

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(Context);

  return (
    <IconButton onClick={toggleDarkMode}>
      <DarkModeIcon darkMode={!!darkMode} />
    </IconButton>
  );
};

export default DarkModeToggle;
