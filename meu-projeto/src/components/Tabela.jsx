
import React from 'react';
import Imagem from './Imagem';
import Imagem3 from './Imagem3';
import Imagem2 from './Imagem2';
import Imagem4 from '../components/terno'
import Imagem5 from './aneis';
import Imagem6 from './moletom';

import styles from './tabela.module.css';

function Tabela() {

  return ( <>
  <h1>roupas diversas</h1>
    <div className={styles.container}>
     
    <div className={styles.divs}>
            <h1>Camisas sociais <Imagem/> camisas dedicadas para
            ocasioes especiais</h1>
            <p>medio</p>
            <p>R$80</p>
    </div>
   <div className={styles.divs}>
          <h1>Sapatos <Imagem3/> Sapatos comfortaveis para uso do dia a dia</h1>
          <p>39</p>
          <p>R$150</p>
    </div>
    <div className={styles.divs}>
          <h1>Camisas (oversized)<Imagem2/>Camisa oversized para garantir maior conforto</h1>
          <p>grande (XL)</p>
          <p>R$35</p>
    </div>
    <div className={styles.divs}>   
          <h1>Moletom <Imagem6/>Moletom para grande estilo</h1>
          <p>medio</p>
          <p>R$70</p>
    </div>
    <div className={styles.divs}>    
          <h1>Terno e calça slim fit <Imagem4/> conjunto de terno para elegancia</h1>
          <p>variado (sob medida)</p>
          <p>R$820</p>
    </div>
    <div className={styles.divs}>     
          <h1>Kit de aneis de ouro<Imagem5/>aneis</h1>
          <p>ajustável</p>
          <p>R$14 (50% off)</p>
    </div>  
    </div>
    </>
  )
}

export default Tabela;