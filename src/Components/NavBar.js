import CartWidget from "./CartWidget/CartWidget";
import NavBarBootstrap from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <NavBarBootstrap collapseOnSelect expand="lg" bg="info" variant="danger">
            <Container>
                <NavBarBootstrap.Brand href="" className="Title">Meti Tejidos</NavBarBootstrap.Brand>
                <NavBarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
                <NavBarBootstrap.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Tienda </Nav.Link>
                        <Nav.Link href="">Sobre nosotros</Nav.Link>
                        <Nav.Link href="">Contactanos</Nav.Link>
                        <NavDropdown title="Colecciones" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Otoño-Invierno 2022</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Primavera-Verano 2023</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Otoño-Invierno 2023 <b>(Nueva)</b></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"> Mostrar todas </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><CartWidget /></Nav.Link>
                    </Nav>
                </NavBarBootstrap.Collapse>
            </Container>
        </NavBarBootstrap>
    );
}


export default NavBar;