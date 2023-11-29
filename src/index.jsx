import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ContextProvider } from './Components/utils/global.context';
import App from './App';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App/>}>
              <Route path='/Home' element={<Home/>} />
              <Route path='/Dentist/:id' element={<Detail/>} />
              <Route path='/Favs' element={<Favs/>} />
              <Route path='/Contact' element={<Contact/>} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
