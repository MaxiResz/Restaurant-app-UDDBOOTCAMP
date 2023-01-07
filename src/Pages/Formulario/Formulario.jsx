import {db} from '../../config/firebase'
import { useState } from 'react'
import {collection, addDoc} from 'firebase/firestore'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Footer from '../../Routes/Footer/Footer'
import '../Formulario/Formulario.css'
  
const Formulario = () => {
    const valorInicial = {
        nombre: '',
        apellidos: '',
        email: '',
        comentario: ''
    }
    const [user, setUser] = useState(valorInicial);

    const handleInput = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const EnviarForm = async(e) =>{
        e.preventDefault()

        try{    
            const colRef = collection(db, 'clientes')
            await addDoc(colRef, {
                ...user
            })


        }catch (error){
            console.log(error)
        }
        
        setUser({...valorInicial})
    }
   
    
    return (
    <div className='container'>
   <Form onSubmit={EnviarForm}>     
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre..." name='nombre' onChange={handleInput} value={user.nombre} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tus Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Apellidos..." name='apellidos' onChange={handleInput} value={user.apellidos} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu Correo</Form.Label>
        <Form.Control type="mail" placeholder="Email..." name='email' onChange={handleInput} value={user.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label >Comentario</Form.Label>
        <Form.Control className='' type="text" placeholder="Escribe aqui..." name='comentario' onChange={handleInput} value={user.comentario} />
      </Form.Group>
      <Button id='boton' variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    <Footer />
    </div>
  )
}

export default Formulario