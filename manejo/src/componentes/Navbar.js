import './css/navbar.css'
import Carrito from './CartWidget'
function Navegacion(props) {
    return(
        <nav>
            
            <div className="logo">
                LOGO
            </div>
            <div className="items">
                <div className="item">
                    INICIO
                </div>
                <div className="item">
                    NOSOTROS
                </div>
                <div className="item">
                    CLASES
                </div>
                <div className="item">
                    CONTACTANOS
                </div>
                <div className="item"> 
                    <Carrito />               
                </div>
            </div>
        </nav>       
    )
}

export default Navegacion