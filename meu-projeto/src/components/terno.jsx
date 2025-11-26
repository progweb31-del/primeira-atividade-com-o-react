import React from 'react';

// Aqui estamos importando a imagem que está em 'src/assets/img/night.jpg'
import ternoslimfit from '../assets/ternoslimfit.jpg';

function Imagem4() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={ternoslimfit} alt="lol" width={'240'} height={'10'}/> ;
}

export default Imagem4;