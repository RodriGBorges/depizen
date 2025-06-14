import React from 'react';
import Productos from './Productos';

function listaProductos({ productos}) {
  return (
    <>
      <h2>Tienda online</h2>
      <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'space-between'}}>
          {
              productos.map((producto) => (
                  <Productos key={producto.id}producto={producto}/>
              ))
          }
      </div>
    </>
  );
};

export default listaProductos;