import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

const defaultState = { darkMode: true, toggleDark: () => {} };

const Context = createContext(defaultState);

interface Props {
  children: ReactNode;
}

const ContextProvider = (props: Props) => {
  const [darkMode, setDarkMode] = useState(true);

  // component did mount
  useEffect(() => {
    const dark = JSON.parse(
      localStorage.getItem('dark') || String({ dark: false })
    );

    if (dark === false) {
      setDarkMode(dark);
    } else if (supportsDarkMode()) {
      setDarkMode(true);
    }
  }, []);

  const toggleDark = useCallback(() => {
    // set dark mode state
    setDarkMode(!darkMode);

    // set local storage
    localStorage.setItem('dark', String(darkMode));
  }, [setDarkMode]);

  return (
    <Context.Provider value={{ darkMode, toggleDark }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
