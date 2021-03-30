import react,{useState,useEffect,setCount}from 'react';
import Item from "./carta";
import './itemListContainer.css'
import ItemDetail from './detalle/itemDetail'
import {InfoJson,InfoJson2} from'../info/info.js'

    function ItemListContainer(props) {
        InfoJson.map((infoDetalle,index )=>{

        })
        return(
            <div>
            <div className="productos" >
            {InfoJson.map((infoDetalle,index )=>{
                return(
                <div>
                    <div className="productos">
                    <div className="producto">
                        <Item autor={infoDetalle.titulo}  titulo={infoDetalle.titulo} imagen={infoDetalle.imagen}/>
                    </div>

                    </div>
                </div>
                )

            })}
            </div>
            <div className="productos" >
            {InfoJson2.map((infoDetalle,index )=>{
                return(
                <div>
                    <div className="productos">
                    <div className="producto">
                        <Item autor={infoDetalle.autor} titulo={infoDetalle.titulo} imagen={infoDetalle.imagen}/>
                    </div>

                    </div>
                </div>
                )

            })}
            </div>

            </div>

        )
    }



export default ItemListContainer