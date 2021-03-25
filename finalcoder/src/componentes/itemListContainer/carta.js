import React from 'react'
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
                <button>Ver mas</button>
            </div>
        </div>

        
    )
}
export default Item

