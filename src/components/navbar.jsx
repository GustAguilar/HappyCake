import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 


const BarraNavegacion = () => { 
    return (
        <Navbar className='navbar-dark navbar'>
        <Container fluid >
            <div>
                <Link to="/" className='text-decoration-none text-white mx-1'>Home 🏠</Link>
                <Link to="/contacto"  className='text-decoration-none text-white mx-3'>Contacto 📒</Link>
            </div>
        <Navbar.Brand ><strong>HappyCake 🍰</strong></Navbar.Brand>
        </Container>
        </Navbar>
    )
} 

export default BarraNavegacion