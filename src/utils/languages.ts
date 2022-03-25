import { ArrayElement } from '@typescript/@types/utils';
import { map } from 'lodash';

export const langMap = [
  { code: 'en', label: 'English' },
  // { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'et', label: 'Eesti' },
  { code: 'fr', label: 'Français' },
  { code: 'hu', label: 'Magyar' },
  { code: 'ru', label: 'Русский' },
  // { code: 'se', label: 'Svensk' },
] as const;

export type LanguageObject = ArrayElement<typeof langMap>;

export type LanguageCode = LanguageObject['code'];

export const languageCodes: LanguageCode[] = map(langMap, ({ code }) => code);
