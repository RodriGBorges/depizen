import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import loading from '../assets/cargando.gif'
import ListaProductos from '../components/listaProductos';

const GaleriaProductos = ({agregarAlCarrito, carrito, productos, cargando, eliminarDelCarrito}) => {
  return (
    <>
      <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={carrito}/>
      <h1>Tienda Online</h1>
        {
          cargando ? <img src={loading} alt='Cargando'/> :
          <ListaProductos agregarAlCarrito={agregarAlCarrito} productos={productos}/>
        }
      <Footer />
    </>
  )
}

export default GaleriaProductos