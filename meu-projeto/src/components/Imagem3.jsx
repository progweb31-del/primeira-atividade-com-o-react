import React from 'react';

// Aqui estamos importando a imagem que está em 'src/assets/img/night.jpg'
import react from '../assets/react.svg';

function Imagem() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={"https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/sollu/media/uploads/produtos/foto/ybuzkbvv/38513-soft-brush-marinho.jpg"} alt="a" width={'240'} height={'10'}/>;
}

export default Imagem;