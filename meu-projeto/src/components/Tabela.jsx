// Importa o React e o ícone de lixeira da biblioteca react-icons
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Fa = FontAwesome
import Imagem from './Imagem';
import Imagem3 from './Imagem3';
import Imagem2 from './Imagem2';
import './tabela.css'

function Tabela() {

  return (
    <table border={'2'}>
      <thead>
        <tr>
          <th>Roupas</th>
          <th>Tamanho</th>
          <th>preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>camisas sociais <Imagem/></td>
            <td>medio</td>
            <td>R$80</td>
        </tr>
        <tr>
          <td>sapatos <Imagem3/></td>
          <td>39</td>
          <td>R$150</td>
        </tr>
        <tr>
          <td>camisas (oversized)<Imagem2/>
          </td>
          <td>grande (XL)</td>
          <td>R$35</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tabela;