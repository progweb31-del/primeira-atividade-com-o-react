// Importa o React e o ícone de lixeira da biblioteca react-icons
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Fa = FontAwesome

function Tabela() {

  return (
    <table>
      <thead>
        <tr>
          <th>Roupas</th>
          <th>Tamanho</th>
          <th>preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>camisas</td>
            <td>medio</td>
            <td>R$80</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tabela;