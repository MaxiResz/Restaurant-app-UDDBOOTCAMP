import './App.css';
import {Routes, Route} from 'react-router-dom'
import Products from '../src/Pages/Products/Products'
import Notfoundpage from '../src/Pages/Notfoundpage/Notfoundpage'
import Formulario from '../src/Pages/Formulario/Formulario'
import Layout from '../src/components/Layout/Layout'
import Home from './Pages/Home/Home'

 


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
         <Route path='/products' element={<Products />} />
         <Route path='/notfoundpage' element={<Notfoundpage />} />
         <Route path='/formulario' element={<Formulario />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
