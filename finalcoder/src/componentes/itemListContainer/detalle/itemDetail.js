import react from 'react'
import './detalle.css'
import { Link } from 'react-router-dom'

function ItemDetail(props) {
    return(
    <div className="detalle">
        <div className="zonaSuperior">
            <Link to={'/'}>Volver al inicio</Link>
        </div>
        <div className="zonaContenido">
            <div className="zonaFoto">
                <img src="https://via.placeholder.com/600"/>
            </div>
            <div className="zonaDescripcion">
                <h1>(Titulo de la obra)</h1>
                <h3>(Autor de la obra)</h3>
                <p>Descripcion de la obra (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rutrum risus. Vestibulum finibus risus nec malesuada molestie. Etiam pellentesque neque pulvinar ex vehicula, a efficitur ex facilisis. Phasellus nisl nisl, pellentesque id neque et, commodo luctus mi. Mauris eget commodo massa. Aenean non dui bibendum, elementum quam non, eleifend tellus. Aliquam ornare, urna vitae pulvinar lacinia, diam purus viverra tortor, nec facilisis turpis enim in sapien. Donec sed metus sodales, volutpat enim id, dignissim dui. Nam sodales, neque a dapibus imperdiet, tellus diam gravida turpis, nec posuere libero elit nec sem. Etiam facilisis urna sed ornare ultricies. Vivamus et nulla placerat, aliquet magna eu, elementum leo. Ut non dolor tellus.

Vestibulum vel fringilla tellus. Pellentesque dictum orci elit, sit amet aliquet diam tempus vitae. Integer sed erat id lacus laoreet vehicula nec eu felis. Ut varius porttitor tincidunt. Vestibulum tortor mi, molestie sagittis nulla at, convallis pharetra urna. Proin scelerisque eros et congue scelerisque. Aliquam consectetur, lorem ac iaculis ornare, ligula dui pellentesque ante, quis laoreet ipsum velit quis mauris. Fusce eleifend nunc at lectus varius egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi convallis molestie purus, sed efficitur tortor facilisis ut.)</p>
                <p>(Precio)</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail