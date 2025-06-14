import React from 'react';
import Productos from './Productos';

function listaProductos({ productos, agregarAlCarrito }) {
  return (
    <>
      <h2>Depilación láser para las siguientes zonas</h2>
      <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
          {
              productos.map((producto) => (
                  <Productos key={producto.id}producto={producto} agregarAlCarrito={agregarAlCarrito}/>
              ))
          }
      </div>
    </>
  );
};

export default listaProductos;