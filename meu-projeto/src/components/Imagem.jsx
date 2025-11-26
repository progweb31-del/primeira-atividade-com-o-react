import React, { captureOwnerStack } from 'react';

// Aqui estamos importando a imagem que está em 'src/assets/img/night.jpg'


function Imagem() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={"https://images.tcdn.com.br/img/img_prod/769687/camisa_social_manga_longa_com_bolso_100_algodao_fio_50_plus_size_zuza_8_ao_10_2503_1_7da223c4e733e635cb8b3e99fe8a292a.jpg"} alt="Gatinho local" width={'240'} height={'10'}/>;

    
}

export default Imagem;