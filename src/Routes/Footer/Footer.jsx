import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../Footer/Footer.css'
import Reservas from '../../Pages/Formulario/Formulario'
import LogoRestaurant from '../../assets/Imagenes-Proyecto 4/Logo-restaurant.jpg'


const Footer = () => {
  return (
    <>
    <div className='footer'>
      <Container>
        <Row>
          <Col sm={ 3}>
            <h5 className='h5AboutUs'>Sobre Nosotros </h5>
            <p className='parrafoAboutUs'>Estamos en: Santa Valentina 038, Colina</p>
            <p className='parrafoAboutUs'>Nuestro Whatsapp: +56 9 954777630</p>
            <p className='parrafoAboutUs'><a id='informacionLegal' href="#">Información Legal</a></p> 
            <p className='parrafoAboutUs'>Términos y Condiciones de Uso</p>
            <p className='parrafoAboutUs'>Política y Privacidad</p>

          </Col>
          <Col sm={ 3}>
            <h5 className='h5AboutUs'>Redes Sociales </h5>
            <ul className='list-unstyled'>
              <li ><a className='redesSocialesli' href="#">Instagram</a></li>
              <li ><a className='redesSocialesli' href="#">Facebook</a></li>
            </ul>
          </Col>
          <Col sm={ 3}>
            <h5 className='h5AboutUs'>Mi cuenta </h5>
            <p><a className='redesSocialesli' href={<Reservas />}>Pedir</a></p>
            
          </Col>
        </Row>
      </Container>
    </div>
    <div className='footerBottom p-2'>
      <Container>
        <p className='text-center mt-3'>Copyright | Design & Developed By Maximiliano Reszczynski</p>
      </Container>


    </div>
    </>
  )

  
}




export default Footer