import { isNil } from 'lodash';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

const checkDarkModePreference = () => {
  const prefersDarkMode =
    window.matchMedia('(prefers-color-scheme: dark)').matches === true;

  return prefersDarkMode;
};

const defaultState = { darkMode: true, toggleDarkMode: () => {} };

export const Context = createContext(defaultState);

interface Props {
  children: ReactNode;
}

const ContextProvider = (props: Props) => {
  const [darkMode, setDarkMode] = useState(true);

  const setPersistentDarkMode = useCallback(
    (useDark: boolean) => {
      // set dark mode state
      setDarkMode(useDark);

      // set local storage
      localStorage.setItem('dark', String(useDark));
    },
    [setDarkMode]
  );

  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !darkMode;

    setPersistentDarkMode(newDarkMode);
  }, [darkMode, setPersistentDarkMode]);

  // component did mount
  useEffect(() => {
    // check local storage for returning visitors
    const dark = localStorage.getItem('dark');

    if (!isNil(dark)) {
      // browsers store the value as a string, so we must parse it first
      setDarkMode(JSON.parse(dark));
    } else {
      const prefersDarkMode = checkDarkModePreference();

      setPersistentDarkMode(prefersDarkMode);
    }
  }, []);

  return (
    <Context.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
