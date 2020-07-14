import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('dark');

  // fetch data from local storage did user set any theme before
  useEffect(() => {
    if (localStorage.getItem('userTheme')) {
      const preTheme = JSON.parse(localStorage.getItem('userTheme'));
      setTheme(preTheme);
    }
  }, []);

  //set Themes in local storage
  useEffect(() => {
    localStorage.setItem('userTheme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};
