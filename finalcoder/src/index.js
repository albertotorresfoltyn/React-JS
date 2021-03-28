import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navegacion from './componentes/navbar/Navbar'
import reportWebVitals from '../../finalcoder/src/reportWebVitals';
import ItemListContainer from './componentes/itemListContainer/itemListContainer'
import LandingPage from './componentes/landingPage/index'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Item from './componentes/itemListContainer/detalle/itemDetail'
import ItemDetail from './componentes/itemListContainer/detalle/itemDetail';
import Carrito from './componentes/carrito/carrito'
import Error from './componentes/error404/error'
import Footer from './componentes/footer/footer'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Navegacion/>

      <Switch>
        
        <Route exact path="/">
          <LandingPage />
          <ItemListContainer/>
        </Route>


        <Route exact path="/producto">
          <ItemDetail/>
        </Route>

        <Route exact path="/carrito">
          <Carrito/>
        </Route>
      
        <Route component={Error}/>
      
      </Switch>
    
    
    </BrowserRouter>
    <Footer/>
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();