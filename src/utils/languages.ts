import { flags } from '@images';
import { ArrayElement } from '@typescript/@types/utils';
import { map } from 'lodash';

export const langMap = [
  { code: 'en', flag: flags.UK, label: 'English' },
  // { code: 'de', flag: flags.Germany, label: 'Deutsch' },
  { code: 'es', flag: flags.Spain, label: 'Español' },
  { code: 'et', flag: flags.Estonia, label: 'Eesti' },
  { code: 'fr', flag: flags.France, label: 'Français' },
  { code: 'hu', flag: flags.Hungary, label: 'Magyar' },
  { code: 'ru', flag: flags.Russia, label: 'Русский' },
  // { code: 'se', flag: flags.Sweden, label: 'Svensk' },
] as const;

export type LanguageObject = ArrayElement<typeof langMap>;

export type LanguageCode = LanguageObject['code'];

export const languageCodes: LanguageCode[] = map(langMap, ({ code }) => code);
