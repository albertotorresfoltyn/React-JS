import react from 'react'
import './footer.css'

function Footer() {
    return(
    <footer>
        <div class="footer">
        <div class="row">
        <a href="https://www.instagram.com/1corcho/"><i class="fa fa-instagram"></i></a>
        <a href="https://twitter.com/lolodurante"><i class="fa fa-twitter"></i></a>
        <a href="https://github.com/loleiii"><i class="fa fa-github"></i></a>
        </div>

        <div class="row">
        <ul>
        <li>Contactanos</li>
        <li>Quienes somos</li>
        <li>Terminos y condiciones</li>
        </ul>
        </div>

        <div class="row">
        Artmajeum derechos reservados || Diseñado por Lolo  
        </div>
        </div>
    </footer>
    );
}

export default Footer
