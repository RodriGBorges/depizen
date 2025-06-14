import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contactos = ({carrito, eliminarDelCarrito}) => {
  return (
    <>
      <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={carrito}/>
      <h1>Contactos</h1>
      <Footer />
    </>
  )
}

export default Contactos