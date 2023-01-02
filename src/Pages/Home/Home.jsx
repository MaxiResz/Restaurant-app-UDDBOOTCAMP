import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../../assets/Imagenes-Proyecto 4/pasteleria-slide-1.png'
import Slider2 from '../../assets/Imagenes-Proyecto 4/pasteleria-slide-2.png'
import '../Home/Home.css'


const Home = () => {
  return (
    <div>
      
      <Carousel>
        <Carousel.Item>
          <img
          className='d-block w-100' 
          src={Slider2}
          alt="slider1" 
          />
          <Carousel.Caption className='carrusel1'>
            <h1 id='h1Banner'>Pasteleria Bakery</h1>
            <p id='parrafoBanner'> Somos la pasteleria más reconocida del país, con 20 locales alrededor de toda la regíon metropolitana</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
          className='d-block w-100' 
          src={Slider1}
          alt="slider2" 
          />
          <Carousel.Caption>
            <h3>second-sliser</h3>
            <p>##</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  )
}

export default Home