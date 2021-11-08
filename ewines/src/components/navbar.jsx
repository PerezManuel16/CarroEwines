
const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-wines</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mx-auto" >
                            <li><a className="nav-link active" aria-current="page" href="#">Destacados</a></li>
                            <li><a className="nav-link" href="#">Tintos</a></li>
                            <li><a className="nav-link" href="#">Blancos</a></li>
                            <li><a className="nav-link" href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <i class="bi bi-cart3"> tu carrito</i>
            </div>
        </nav>
        


    )
};
export default NavBar;