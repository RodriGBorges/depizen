import React, {useState} from 'react'
import './styleProductos.css'

const Productos = ({producto, agregarAlCarrito}) => {

  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));

  const decrementar = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <section className='card'>
      <div className='imagenContainer'>
        <img src={producto.imagen} alt="" className='imagen' />
      </div>
      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>Turnos disponibles: {producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={incrementar}>+</button>
      </div>

    <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>

      </section>
  )
}

export default Productos