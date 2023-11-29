import { createContext, useState, useMemo, useEffect } from 'react';

export const ContextGlobal = createContext();
export const initialState = { theme: '', data: [] };

export const ContextProvider = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(false);
  const [dentists, setDentists] = useState([]);

  //Logica de Context, utilizando el hook useMemo
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };
  const themeClass = useMemo(() => (darkTheme ? 'dark' : 'light'), [darkTheme]);

  //Implementacion para traer datos de API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <ContextGlobal.Provider value={{ darkTheme, toggleTheme, dentists }}>
        <div className={themeClass}>{children}</div>
    </ContextGlobal.Provider>
  );
};
