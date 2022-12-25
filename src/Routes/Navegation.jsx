import React from 'react'
import ImagenLogo from '../assets/Imagenes-Proyecto 4/Logo-restaurant.jpg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Fragment from 'react-bootstrap'
import '../Routes/Navegation.css'

const Navegation = () => {
  return (
    <>
        <Navbar bg="white">
        <Container className='justify-content-center'>
          <Navbar.Brand href="#home">
            <img id='imagenLogo'             
              src={ImagenLogo}
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Nav className="me-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Menu</Nav.Link>
            <Nav.Link href="/formulario">Reservas</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegation