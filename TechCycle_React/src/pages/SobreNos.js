import React from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';
import '../assets/css/padrao.css';
import '../assets/css/sobrenos.css'


function SobreNos() {
  return (
    <div>
      <CabecalhoAdm/>
      <main className="conteudo">
        <div className="titulo_sobrenos">
          <h1 className="sobre_nos">Sobre nós</h1>
          <hr/>
        </div>
        <section className="box1_sobrenos">
          <div>
          <h2 className="techcycle_sobrenos">TechCycle</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum autem voluptates vero
                    exercitationem.
                    Labore sit ab nemo obcaecati? Quasi dolorem nihil aspernatur voluptatum maiores veritatis
                    repudiandae
                    tempora! Tenetur, modi saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                    accusantium esse repellendus cupiditate magnam! Veritatis commodi non nobis </p>
          </div>
          <img className="foto_pc_sobrenos" src={require("../assets/img/fundo_computador.png")} alt=""/>
        </section>
        <div>
          <hr className="linha_sobrenos"/>
        </div>
        <section className="box2_sobrenos">
        <img className="foto_grupo_sobrenos" src={require("../assets/img/programmers.jpg")} alt=""/>
       <div>
       <h2 className="funcoders_sobrenos">FunCoders</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum autem voluptates vero
                    exercitationem.
                    Labore sit ab nemo obcaecati? Quasi dolorem nihil aspernatur voluptatum maiores veritatis
                    repudiandae
                    tempora! Tenetur, modi saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
                    accusantium esse repellendus cupiditate magnam! Veritatis commodi non nobis </p>
       </div>
      </section>
      </main>
      <Rodape/>
    </div>
  );
}

export default SobreNos;