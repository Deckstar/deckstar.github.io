import langMap from '@i18n/utils/langMap';
import { IconButton, MenuItem, Select } from '@material-ui/core';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { get, map } from 'lodash';
import React, { ReactNode, useCallback, useContext } from 'react';

import { NavbarContext } from './Context';
import useStyles from './Navbar.style';

const FlagChoice = (props: Language) => {
  const { code, label, flag } = props;

  return (
    <>
      <IconButton disabled color="inherit">
        <img src={flag} alt={`${code} flag`} style={{ height: 24 }} />
      </IconButton>
      {label}
    </>
  );
};

const SelectedFlag = (value: any): ReactNode => {
  const [state] = useContext(NavbarContext);
  const { langValue } = state;

  if (!langValue || !value) {
    return null;
  }

  const { flag, code } = langValue;
  return (
    <IconButton color="inherit">
      <img src={flag} alt={`${code} flag`} style={{ height: 24 }} />
    </IconButton>
  );
};

const LanguageInputComponent = () => {
  return null;
};

const LanguageMenu = () => {
  const [state] = useContext(NavbarContext);
  const classes = useStyles();
  const { changeLanguage } = useI18next();

  const handleChangeLanguage = useCallback(
    (event: React.ChangeEvent<{ value: Language['code'] }>) => {
      const newCode = get(event, 'target.value', langMap[0].code);

      changeLanguage(newCode);
    },
    [changeLanguage]
  );

  return (
    <Select
      value={state.langValue?.code || ''}
      onChange={handleChangeLanguage as SelectInputProps['onChange']}
      disableUnderline
      IconComponent={LanguageInputComponent}
      inputProps={{ name: 'language' }}
      classes={{ select: classes.languageSelect }}
      renderValue={SelectedFlag}
    >
      {map(langMap, (lang) => (
        <MenuItem value={lang.code} key={`language ${lang.code}`}>
          <FlagChoice {...lang} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageMenu;
