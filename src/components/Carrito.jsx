import React from 'react'
import './styleCarrito.css'

const Carrito = ({cartItems, isOpen, onClose, eliminarDelCarrito}) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 style={{color:'black'}}>Carrito de Compras</h2>
        <button onClick={onClose}className='close-button'><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div className='cart-content'>
        {cartItems.length === 0 ? (
          <p style={{color:'red'}}>El carrito está vacío</p>
        ) : (
          <ul className='cart-items'>
            {cartItems.map((item) => (
              <li key={item.id} style={{color:'black'}}>
                {item.nombre} - ${item.precio}
                <button onClick={() => eliminarDelCarrito(item)}><i className="fa-solid fa-trash"></i></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Carrito