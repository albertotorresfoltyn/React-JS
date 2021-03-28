import React from 'react'
import './carrito.css'
import { Link } from 'react-router-dom'


function Carrito(){
    return(
        <div className="carrito">
          <h1>Tu carrito esta vacio :(</h1>
          <Link to={'/'}><div className="boton">Home</div></Link>
        </div>
    );
}
export  default Carrito