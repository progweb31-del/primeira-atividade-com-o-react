import React from 'react';

// Aqui estamos importando a imagem que está em 'src/assets/img/night.jpg'


function Imagem() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={"https://www.christoff.ind.br/media/catalog/product/cache/1/thumbnail/770x1155/f31b0cfd465b5145025020710a9577fb/c/a/camiseta_oversized_-_live_fast_preta_costas.png"} alt="a" width={'240'} height={'10'}/>;
}

export default Imagem;