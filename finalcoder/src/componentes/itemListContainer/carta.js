import React from 'react'
import { Link } from 'react-router-dom'
import './carta.css'
import {InfoJson,InfoJson2} from'../info/info'


 function Item(props) {
    return(
        <div className="producto">
            <img src={props.imagen} />
            <div className="infoAbajo">
                <div className="titulo">
                    {props.titulo}
                </div>
                <div className="autor">
                    {props.autor}
                </div>
                <Link to={"/producto"}><button>Ver mas</button></Link>

            </div>
        </div>

        
    )
}
export default Item

