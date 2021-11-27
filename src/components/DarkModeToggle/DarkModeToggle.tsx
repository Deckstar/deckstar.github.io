import { Context } from '@context';
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
    <IconButton onClick={toggleDarkMode} size="large">
      <DarkModeIcon darkMode={!!darkMode} />
    </IconButton>
  );
};

export default DarkModeToggle;
