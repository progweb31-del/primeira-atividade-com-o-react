// Importa o React e o ícone de lixeira da biblioteca react-icons
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Fa = FontAwesome
import Imagem from './Imagem';
import Imagem3 from './Imagem3';
import Imagem2 from './Imagem2';
import Imagem4 from '../components/terno'
import Imagem5 from './aneis';
import Imagem6 from './moletom';

import './tabela.css'

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
            <td>Camisas sociais <Imagem/> camisas dedicadas para a maior parte das ocasioes</td>
            <td>medio</td>
            <td>R$80</td>
        </tr>
        <tr>
          <td>Sapatos <Imagem3/></td>
          <td>39</td>
          <td>R$150</td>
        </tr>
        <tr>
          <td>Camisas (oversized)<Imagem2/>
          </td>
          <td>grande (XL)</td>
          <td>R$35</td>
        </tr>
        <tr>
          <td>Moletom <Imagem6/></td>
          <td>medio</td>
          <td>R$70</td>
        </tr>
        <tr>
          <td>Terno e calça slim fit <Imagem4/>
          </td>
          <td>variado (sob medida)</td>
          <td>R$820</td>
        </tr>
        <tr>
          <td>Kit de aneis de ouro<Imagem5/></td>
          <td>ajustável</td>
          <td>R$14 (50% off)</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tabela;