import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = ({carrito, eliminarDelCarrito}) => {
  return (
    <>
      <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={carrito}/>
      <h1>AcercaDe</h1>
      <Footer />
    </>
  )
}

export default AcercaDe