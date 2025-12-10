// Importa o React e a função useState para controlar estados
import React, { useState } from 'react';
// Importa os componentes que serão usados na página
import Tabela from './components/Tabela';

// Importa o estilo CSS geral do site
import './App.css';

function App() {

  return (
    <div>
      <div className='sla'>
      <div className='p0'><h1>Bem-vindo a loja de roupas</h1></div>
      <div className='p1'><p>inicio</p></div>
      <div className='p2'><p>sobre</p></div>
      <div className='p3'><a href=""></a></div>
      </div>
      <p>Neste lugar voce encontrará variedades de roupas, acessorios, calçados, etc...</p>

      <Tabela/>

    </div>
  );

}

export default App;