import React from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/' className="link">Inicio</Link></li>
          <li><Link to='/tienda' className="link">Tienda</Link></li>
          <li><Link to='/acercade' className="link">Sobre nosotros</Link></li>
          <li><Link to='/contacto' className="link">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header