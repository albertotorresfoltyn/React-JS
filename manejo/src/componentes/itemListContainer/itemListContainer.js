import react,{useState,useEffect,setCount}from 'react';
import Item from "./carta";
import './itemListContainer.css'


    function ItemListContainer(props) {
        useEffect(()=>{
            const contador=setTimeout(() => {
                setCount('Tiempo')
            }, 2000);
            return()=>clearTimeout(contador)
        },[]);
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