import './header.css';

function Header(){
    return(
        <div className="header">
            <div className="header__Logo">
                <h1 className="logo">Proyect Brand</h1>
            </div>
            <nav className="header__Nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;