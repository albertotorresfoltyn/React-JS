import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navegacion from './componentes/navbar/Navbar'
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './componentes/itemListContainer/itemListContainer'
import LandingPage from './componentes/landingPage/index'

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
      <ItemListContainer/>       
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();