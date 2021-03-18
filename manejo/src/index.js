import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navegacion from './componentes/Navbar'
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './componentes/itemListContainer'

ReactDOM.render(
  <React.StrictMode>
    <Navegacion />
    <ItemListContainer name="container"/> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();