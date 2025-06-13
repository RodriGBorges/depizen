import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>NotFound 404</h1>
      <button><Link to='/'>Volver al Inicio</Link></button>
    </div>
  )
}

export default NotFound