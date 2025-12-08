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
      <h1>Bem-vindo a loja de roupas</h1>
      <p>inicio</p>
      <p>sobre</p>
      <p>contato</p>
      </div>
      <p>Neste lugar voce encontrará variedades de roupas, acessorios, calçados, etc...</p>
      {/*Exibe a mensagem de sucesso, se existir */}
      {/*mensagemSucesso &&= Verifica se a variável mensagemSucesso tem algum valor (true, texto, etc.).
      Caso tenha, mostra um parágrafo com a mensagem e estilo CSS*/}
      
      <Tabela/>
      {/* Formulário para adicionar visitantes */}
      {/* Formulário para adicionar visitantes */}
      {/* Quando um componente (como <Formulario />) precisa usar uma função que está declarada em outro componente (como App.jsx), é necessário **passar essa função como uma props**. Isso acontece porque o componente filho **não tem acesso direto** às funções do componente pai.*/}
      {/* Neste exemplo, estamos passando a função "adicionarVisitante", que foi criada no App.jsx, para o componente <Formulario /> por meio de uma props chamada "onAdicionar".
      ➤ O nome "onAdicionar" não é uma palavra reservada, você pode escolher qualquer nome! Mas, por **convenção**, usamos nomes como "onAdicionar", "onClick", "onChange", etc., porque indicam que estamos passando uma função que será executada em algum evento.*/}
    

      {/* Tabela com os visitantes */}
      {/*dados={visitantes} É uma prop chamada dados que está enviando 
      para Tabela os dados (lista) que estão guardados na variável visitantes. 
      A Tabela vai usar esses dados para montar as linhas com nome e idade.*/}
      {/*onRemover={solicitarExclusao} é uma prop chamada onRemover, que enviando 
      uma função chamada solicitarExclusao para a Tabela." */}
      
      {/* Imagem ilustrativa */}
   
      {/* Modal (janela) de confirmação */}

    </div>
  );

}

export default App;