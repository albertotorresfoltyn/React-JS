import react from 'react'
import './detalle.css'
import Header from './header'
function ItemDetail(props) {
    return(
    <div className="detalle">
        <div className="grid-container">
            <div className="header">
                <Header />
            </div>
            <div className="foto"></div>
            <div className="descripcion"></div>
            <div className="otras"></div>
        </div>
    </div>
    )
}

export default ItemDetail