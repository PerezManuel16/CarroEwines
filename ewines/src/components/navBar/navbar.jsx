import { Navbar, Nav, } from "react-bootstrap";
import {Link} from "react-router-dom";
import CartWidget from "../cart/cartWidget";


const NavBar = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
                <Link to="/Destacados" className="nav-link" className="logo"> E-Wines</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="NavBar">
                        <Link to="/Destacados" className="nav-link">Destacados</Link>
                        <Link to="/categoria/Tinto" className="nav-link">Tintos</Link>        
                        <Link to="/categoria/Blanco" className="nav-link">Blancos</Link>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>    
            
        </Navbar>

    )
};
export default NavBar;

