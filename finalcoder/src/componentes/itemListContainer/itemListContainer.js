import react,{useState,useEffect,setCount}from 'react';
import Item from "./carta";
import './itemListContainer.css'
import ItemDetail from './detalle/itemDetail'
import InfoJson from '../info/info.js'

    function ItemListContainer(props) {

        return(
            <div>
            <div className="productos" >
                <Item autor="Lorenzo Durante" titulo="01"/>
                <Item autor="Lorenzo Durante" titulo="01"/>
                <Item autor="Lorenzo Durante" titulo="01"/>
            </div> 
            <div className="productos" >
            <Item autor="Lorenzo Durante" titulo="01"/>
            <Item autor="Lorenzo Durante" titulo="01"/>
            <Item autor="Lorenzo Durante" titulo="01"/>     
            </div>
            <div className="productos" >
                <Item autor="Lorenzo Durante" titulo="01"/>
                <Item autor="Lorenzo Durante" titulo="01"/>
                <Item autor="Lorenzo Durante" titulo="01"/> 
            </div> 
            <div className="productos" >
            <Item autor="Lorenzo Durante" titulo="01"/>
            <Item autor="Lorenzo Durante" titulo="01"/>
            <Item autor="Lorenzo Durante" titulo="01"/>     
            </div>
            </div>
        )
    }



export default ItemListContainer