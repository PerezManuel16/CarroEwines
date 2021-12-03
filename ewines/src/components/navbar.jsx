import { Navbar, Nav, } from "react-bootstrap";
import {Link} from "react-router-dom";
import CartWidget from "./cartWidget";


const NavBar = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand to="/" className="margenNombre"><Link to="/" className="nav-link "> E-Wines</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="NavBar">
                        <Link to="/" className="nav-link">Destacados</Link>
                        <Link to="/Tintos" className="nav-link">Tintos</Link>        
                        <Link to="/Blancos" className="nav-link">Blancos</Link>
                        <Link to="/Contacto" className="nav-link">Contacto</Link>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>    
            
        </Navbar>

    )
};
export default NavBar;

