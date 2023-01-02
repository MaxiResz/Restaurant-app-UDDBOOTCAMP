import '../Products/Products.css'
import {useState, useEffect} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../config/firebase' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'



const Products = () => {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    const getMenu = async()=>{
      try{
        const colRef = collection(db, 'menu')
        const response = await getDocs(colRef)

        const docs = response.docs.map((doc) =>{
          const data = doc.data();
          data.id = doc.id;
          return data;
        })
        setMenu(docs)
      }catch (error){
        console.log(error)
      }
    } 
    getMenu()

  }, [] )
  console.log(menu)
  
  return (
    <div>
      <h1 className='text-center mt-5 fw-bold'>Menu</h1>
      <div className='container2'>
      {menu.map(plato=>(
        <Card style={{width: '18rem'}} key={plato.id}>
        <Card.Img variant ="top" src ={plato.img} />
        <Card.Body key={plato.id}>
        <Card.Title>{plato.name}</Card.Title>
        <Card.Text>
        {plato.descripcion}
        </Card.Text>
        <Button variant="primary">Precio: {plato.price} $</Button>
       </Card.Body>
       </Card>
      ))}
      </div>
      
    </div>
  )
}

export default Products