import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './estilosGenerales.css';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import GaleriaProductos from './pages/GaleriaProductos';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';

function App() {

  const [cart, setCart] = useState(0);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/data.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(() => {
        setProductos(datos);
        setCargando(false);
      }, 2000);
    })
    .catch(error => {
      console.log('Error', error);
      setCargando(false)
      setError(true)
    })
  },[])

  console.log(productos);
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home productos={productos} cargando={cargando}/>} />

        <Route path='/tienda' element={<GaleriaProductos/>}/>

        <Route path='/acercade' element={<AcercaDe/>} />

        <Route path='/contacto' element={<Contactos/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
