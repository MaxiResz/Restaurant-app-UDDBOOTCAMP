import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../Footer/Footer.css'



const Footer = () => {
  return <footer className='mb-2 fixed-bottom'>
          <Container>
            <Row>
                <Col className='text-center py-3'>Copyright &copy; Bakery </Col> 
            </Row>
          </Container>
        </footer>
  
}




export default Footer