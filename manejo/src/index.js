import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navegacion from './Navbar'
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './itemListContainer'

ReactDOM.render(
  <React.StrictMode>
    <Navegacion />
    <ItemListContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
