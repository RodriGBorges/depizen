import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Carrito from '../Carrito';

export const Header = ({cartItems, eliminarDelCarrito}) => {

  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/' className="link">Inicio</Link></li>
          <li><Link to='/tienda' className="link">Tienda</Link></li>
          <li><Link to='/acercade' className="link">Sobre nosotros</Link></li>
          <li><Link to='/contacto' className="link">Contacto</Link></li>
          <li className='cartnav'>
            <button className='btnCart' onClick={() => setCartOpen(true)}><i class="fa-solid fa-cart-shopping"></i></button>
            <Carrito eliminarDelCarrito={eliminarDelCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => {
              setCartOpen(false)
            }}/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header