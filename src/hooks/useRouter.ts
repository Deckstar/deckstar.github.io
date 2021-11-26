import { useLocation } from '@reach/router';
import { languageCodes } from '@utils/languages';
import { find, replace, startsWith } from 'lodash';
import { useMemo } from 'react';

export const useRouter = () => {
  const location = useLocation();

  const router = useMemo(() => {
    const { pathname } = location || {};

    const langPrefix = find(languageCodes, (lang) =>
      startsWith(pathname, `/${lang}/`)
    );
    const route = langPrefix
      ? replace(pathname, `/${langPrefix}/`, '/')
      : pathname;

    return { ...location, route };
  }, [location]);

  return router;
};
