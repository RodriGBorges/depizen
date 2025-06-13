import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './estilosGenerales.css';
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import GaleriaProductos from './pages/GaleriaProductos';
import Contactos from './pages/Contactos';
import NotFound from './pages/NotFound';

function App() {

  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/tienda' element={<GaleriaProductos/>}/>

        <Route path='/acercade' element={<AcercaDe/>} />

        <Route path='/contacto' element={<Contactos/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
