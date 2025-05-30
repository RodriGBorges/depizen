import React from 'react';

function listaProductos({ productos }) {
  return (
    <ol>
        {
            productos.map((producto, index) => (
                <li key={index}>
                    {producto}
                </li>
            ))
        }
    </ol>
  );
};

export default listaProductos;