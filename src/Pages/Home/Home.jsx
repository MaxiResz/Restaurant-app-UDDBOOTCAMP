import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../../assets/Imagenes-Proyecto 4/pasteleria-slide-1.png'
import Slider2 from '../../assets/Imagenes-Proyecto 4/pasteleria-slide-2.png'
import '../Home/Home.css'
import Footer from '../../Routes/Footer/Footer'


const Home = () => {
  return (
    <div>
      
      <Carousel fade>
        <Carousel.Item>
          <img id='img1'
          className='d-block w-100' 
          src={Slider2}
          alt="slider1" 
          />
          <Carousel.Caption className='carrusel1'>
            <h1 id='h1Banner'>Pasteleria Bakery</h1>
            <p id='parrafoBanner'> Somos la pasteleria más reconocida del país, con 20 locales alrededor de toda la regíon metropolitana</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img id='img2'
          className='d-block w-100' 
          src={Slider1}
          alt="slider2" 
          />
          <Carousel.Caption className='carrusel2'>
            <h3 id='h1Banner2'>Hechas con amor</h3>
            <p id='parrafoBanner2'>Nuestras tortas están siempre frescas y preparadas con los mejores ingredientes, pero lo más importante es que siempre las hacemos con cariño</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  )
}

export default Home