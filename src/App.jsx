import React from 'react';
import ListaProductos from './components/listaProductos';
import Botones from './components/botones';
import Tarjeta from './components/Tarjetas';

function App() {

  let productos = ['producto1', 'producto2', 'producto3'];

  return (
    <>
      <Botones texto='Aceptar' color='green' />
      <Botones texto='Cancelar' color='red' />
      <Botones texto='Ver más' color='blue' />
      <ListaProductos productos={productos} />
    </>
  )
}

export default App
