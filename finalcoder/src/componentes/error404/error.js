import react from 'react'
import './error.css'
import { Link } from 'react-router-dom'

function Error(){
    return(
        <div className="error">
            <h1>Pagina no encontrada</h1>
            <img src='./images/error404.gif'/>
            <Link to={'/'}><button>Home</button></Link>

        </div>
    );
}
export default Error