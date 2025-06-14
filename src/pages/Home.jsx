import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ListaProductos from '../components/listaProductos'
import loading from '../assets/cargando.gif'

const Home = ({agregarAlCarrito, carrito, productos, cargando, eliminarDelCarrito}) => {
  return (
    <>
      <Header eliminarDelCarrito={eliminarDelCarrito} cartItems={carrito}/>
        <main>
          <h1>Bienvenidos a Depizen</h1>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptate deleniti mollitia illum reprehenderit ullam quae cum perferendis excepturi? Deleniti, reiciendis. Veniam in tempora pariatur delectus vel esse minus laborum?</p>

          {
            cargando ? <img src={loading} alt='Cargando'/> :
            <ListaProductos agregarAlCarrito={agregarAlCarrito} productos={productos}/>
          }

        </main>
      <Footer />
    </>
  )
}

export default Home