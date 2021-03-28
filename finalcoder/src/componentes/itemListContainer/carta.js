import React from 'react'
import { Link } from 'react-router-dom'
import './carta.css'

 function Item(props) {
    return(
        <div className="producto">
            <img src="https://via.placeholder.com/150" />
            <div className="infoAbajo">
                <div className="titulo">
                    {props.titulo}
                </div>
                <div className="autor">
                    {props.autor}
                </div>
               <Link to={'/producto/'}><button>Ver mas</button></Link>
            </div>
        </div>

        
    )
}
export default Item

