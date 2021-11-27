import {
  IconButton,
  IconButtonProps,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { langMap, LanguageCode, LanguageObject } from '@utils/languages';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { find, map } from 'lodash';
import React, { useCallback } from 'react';

import useStyles from './Navbar.style';

const Flag = (props: { code: LanguageCode; flag: any } & IconButtonProps) => {
  const { code, flag, ...iconButtonProps } = props;

  return (
    <IconButton {...iconButtonProps} color="inherit" size="large">
      <img src={flag} alt={`${code} flag`} style={{ height: 24 }} />
    </IconButton>
  );
};
const FlagChoice = (props: LanguageObject) => {
  const { code, label, flag } = props;

  return (
    <>
      <Flag disabled code={code} flag={flag} />
      {label}
    </>
  );
};

const SelectedFlag = (value: any) => {
  if (!value) {
    return null;
  }

  const currentLang = find(langMap, ({ code }) => code === value) || langMap[0];

  const { flag, code } = currentLang;
  return <Flag code={code} flag={flag} />;
};

const LanguageInputComponent = () => {
  return null;
};

const LanguageMenu = () => {
  const classes = useStyles();
  const { changeLanguage, language } = useI18next();

  const handleChangeLanguage = useCallback<
    NonNullable<SelectProps<LanguageCode>['onChange']>
  >(
    async (event) => {
      const defaultLang = langMap[0];
      const newCode = (event?.target?.value ??
        defaultLang.code) as LanguageCode;

      await changeLanguage(newCode);
    },
    [changeLanguage]
  );

  return (
    <Select
      value={language as LanguageCode}
      onChange={handleChangeLanguage}
      disableUnderline
      IconComponent={LanguageInputComponent}
      inputProps={{ name: 'language' }}
      classes={{ select: classes.languageSelect }}
      renderValue={SelectedFlag}
    >
      {map(langMap, (lang) => {
        const { code } = lang || {};
        return (
          <MenuItem key={code} value={code}>
            <FlagChoice {...lang} />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default LanguageMenu;
