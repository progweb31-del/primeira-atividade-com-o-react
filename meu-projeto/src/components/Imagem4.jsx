import React from 'react';

// Aqui estamos importando a imagem que está em 'src/assets/img/night.jpg'
import react from '../assets/react.svg';

function Imagem4() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={"https://empreender.nyc3.cdn.digitaloceanspaces.com/dropi/dbb7c45b3574e49b56f669e38b0c2193.png"} alt="a" width={'240'} height={'10'}/>;
}

export default Imagem;