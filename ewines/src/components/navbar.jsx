import { Navbar, Nav, } from "react-bootstrap";
import {Link} from "react-router-dom";


const NavBar = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand to="/" className="margenNombre">E-Wines</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="NavBar">
                        <Link to="/" className="nav-link">Destacados</Link>
                        <Link to="/Tintos" className="nav-link">Tintos</Link>        
                        <Link to="/Blancos" className="nav-link">Blancos</Link>
                        <Link to="/Contacto" className="nav-link">Contacto</Link>
                        <Link to="/Carrito" className="nav-link">
                        <button type="button" className="btn btn-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3 text-light" viewBox="0 0 16 16" >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className="ml-4">Carrito</span>
                        </button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>    
            
        </Navbar>

    )
};
export default NavBar;

