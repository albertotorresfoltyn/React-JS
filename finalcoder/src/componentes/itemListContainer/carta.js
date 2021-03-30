import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import './carta.css'
import {InfoJson,InfoJson2} from'../info/info'



 function Item(props) {
    const[prod,setProd]=useState()
    const [carga,setCarga]=useState(false)

    useEffect(() => {
        setIsLoading(true)
        const promesa= new Promise((res, rej) => {      
            setTimeout(() =>{
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
                    <Link to={`/producto/${props.id}`}><button>Ver mas</button></Link>
    
                </div>
            </div>
            }
            ),2000);    
       });
      promesa.then((result) => {      
           setProd(result);     
           setCarga(false);    
      });
},);


        
    )
}
export default Item

