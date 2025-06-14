import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './estilosGenerales.css';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import GaleriaProductos from './pages/GaleriaProductos';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';

function App() {

  const [carrito, setCarrito] = useState([]);
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

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      setCarrito(carrito.map(item => 
        item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item
      ));
    } else {
      setCarrito([...carrito, {...producto, cantidad: 1}]);
    }
  }

  const eliminarDelCarrito = (producto) => {
    setCarrito(prevCart => {
      return prevCart.map(item => {
        if (item.id === producto.id) {
          if (item.cantidad > 1) {
            return {...item, cantidad: item.cantidad - 1};
          } else {
            return null; // Marcar para eliminar
          }
        } else {
          return item; // Mantener el item
        }
      }).filter(item => item !== null); // Filtrar los nulos
    })
  }
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home eliminarDelCarrito={eliminarDelCarrito} agregarAlCarrito={agregarAlCarrito} carrito={carrito} productos={productos} cargando={cargando}/>} />

        <Route path='/tienda' element={<GaleriaProductos agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} carrito={carrito} productos={productos} cargando={cargando}/>}/>

        <Route path='/acercade' element={<AcercaDe carrito={carrito} eliminarDelCarrito={eliminarDelCarrito}/>} />

        <Route path='/contacto' element={<Contactos carrito={carrito} eliminarDelCarrito={eliminarDelCarrito}/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
