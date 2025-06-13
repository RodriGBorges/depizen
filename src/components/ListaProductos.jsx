import React from 'react';

function listaProductos({ productos }) {
  return (
    <>
      <h2>Tienda online</h2>
      <ol>
          {
              productos.map((producto, index) => (
                  <li key={index}>
                      {producto}
                  </li>
              ))
          }
      </ol>
    </>
  );
};

export default listaProductos;