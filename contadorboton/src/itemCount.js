import react,{useState} from 'react'
import './itemCount.css'



function Contador(props){
    const [contador, setContador]=useState(0)
    const stock=10


    return(
        <div className="contenedor">
            <div className="zonaBotones">
            <button   disabled={contador>=10}
                onClick={
                    ()=>setContador(contador+1)
                }>+</button>
                <button disabled={contador<=0}
                onClick={
                    ()=>setContador(contador+-1)
                }>-</button>
            </div>
            <div>{contador}</div>
            <div>Stock disponible={stock-contador}</div>
        </div>
    );
            
}
export default Contador