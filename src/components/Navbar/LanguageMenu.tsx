import {
  IconButton,
  IconButtonProps,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { langMap, LanguageCode, LanguageObject } from '@utils/languages';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { map, mapKeys } from 'lodash';
import React, { useCallback, useMemo } from 'react';

import useStyles from './Navbar.style';

interface FlagProps extends IconButtonProps {
  code: LanguageCode;
  flag: FlagNode;
}

const Flag = (props: FlagProps) => {
  const { code, flag, ...iconButtonProps } = props;

  return (
    <IconButton {...iconButtonProps} color="inherit" size="large">
      <GatsbyImage
        image={flag?.src?.childImageSharp?.gatsbyImageData}
        alt={`${code} flag`}
        style={{ width: 24, height: 24 }}
      />
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

type FlagsMap = {
  [K in LanguageCode]: FlagNode;
};

interface SelectedFlagProps extends Omit<FlagProps, 'flag'> {
  flags: FlagsMap;
}

const SelectedFlag = (props: SelectedFlagProps) => {
  const { code: value, flags } = props;
  if (!value) {
    return null;
  }

  const flag = flags[value];

  return <Flag code={value} flag={flag} />;
};

const LanguageInputComponent = () => {
  return null;
};

type FlagNode = {
  code: LanguageCode;
  name: string;
  src: {
    name: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

type FlagsResponse = {
  allFlagsJson: {
    nodes: FlagNode[];
  };
};

const LanguageMenu = () => {
  const { classes } = useStyles();
  const { changeLanguage, language } = useI18next();

  const flagsData = useStaticQuery<FlagsResponse>(graphql`
    {
      allFlagsJson {
        nodes {
          code
          name
          src {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 40)
            }
          }
        }
      }
    }
  `);

  const flags = useMemo(() => {
    const flagNodes = flagsData?.allFlagsJson?.nodes;

    const keyedFlags = mapKeys(
      flagNodes,
      (flagNode) => flagNode?.code
    ) as FlagsMap;
    return keyedFlags;
  }, [flagsData]);

  const renderSelectedFlag = useCallback(
    (value: LanguageCode) => <SelectedFlag code={value} flags={flags} />,
    [flags]
  );

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
      renderValue={renderSelectedFlag}
      variant="standard"
    >
      {map(langMap, (lang) => {
        const { code } = lang || {};
        const flag = flags[code];

        return (
          <MenuItem key={code} value={code}>
            <FlagChoice {...lang} flag={flag} />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default LanguageMenu;
