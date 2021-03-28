import './navbar.css'
import Carrito from './CartWidget'
import { Link } from 'react-router-dom'
function Navegacion(props) {
    return(
        <nav>
            
            <div className="logo">
                <Link to={'/'}>artmajeur</Link>
            </div>

            <div className="items">
                <div className="item"><Link to={'/'}>HOME</Link></div>
                <div className="item"><Link to={'/nosotros'}>NOSOTROS</Link></div>
                <div className="item"><Link to={'/funcionamiento'}>COMO FUNCIONA</Link></div>
                <div className="item"><Link to={'/carrito'}><Carrito /></Link></div>

            </div>
        </nav>       
    )
}

export default Navegacion