import React from 'react'
import {Link} from "react-router-dom"
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ContextGlobal);
  return (
    <nav className={darkTheme ? 'dark' : 'light'}>
      <Link to="/Home">Home</Link>
      <Link to="/Favs">Favs</Link>
      <Link to="/Contact">Contact</Link>
      <button onClick={toggleTheme}>Cambiar el tema</button>
    </nav>
  )
}
export default Navbar