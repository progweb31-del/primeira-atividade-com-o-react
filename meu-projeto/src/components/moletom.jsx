import moletom from '../assets/moletom.jpg';

function Imagem6() {
  // Essa forma de usar imagens deixa seu código mais limpo, e se quiser trocar a imagem, só muda a linha da importação!
    return <img src={moletom} alt="lol" width={'240'} height={'10'}/> ;
}

export default Imagem6;