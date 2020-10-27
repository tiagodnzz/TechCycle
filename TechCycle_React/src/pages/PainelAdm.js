import React from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/paineladm.css';


function PainelAdm() {

return (
    <div className="App">
        <CabecalhoAdm/>

    <main className="painel_controle">
        <section class="perfil_adm">
        <img src={require("../assets/img/FotoPerfil.jpg")} />
            <div>
                <div className="admpaineladm1">
                <i className="fas fa-user"></i>
                <h2>Nome:</h2>
                <h3>Gandalf</h3>
                </div>

                <div className="admpaineladm2">
                <i className="fas fa-user-tag"></i>
                <h2>Sobrenome:</h2>
                <h3>O Cinzento</h3>
                </div>

                <div className="admpaineladm3">
                <i className="fas fa-envelope"></i>
                <h2>E-mail:</h2>
                <h3>gandalf@tolkien.com</h3>
                </div>

                <a href="edicao_perfil.html">Editar perfil</a>
            </div>
        </section> 
        <section className="atividades_adm">
            <h1>Painel de Controle</h1>
            <hr/>
            <div className="acoes_adm">
                <span>
                    <i className="fas fa-cogs"></i>
                </span>
                <section>
                    <div>
                        <a href="#">Usuários cadastrados</a>
                        <i className="fas fa-user"></i>
                        <a href="home.html">Anúncios cadastrados</a>
                        <i className="fas fa-archive"></i>
                    </div>
                    <div>
                        <a href="cadastrar_usuario.html">Cadastrar Usuário</a>
                        <i className="fas fa-plus"></i>
                        <a href="cad_produto.html">Cadastrar Produto</a>
                        <i className="fas fa-plus"></i>
                    </div>
                    <div>
                        <a href="aprovacao_usuario.html">Solicitação de cadastro</a>
                        <i className="fas fa-headset"></i>
                        <a href="aprovacao_interesse.html">Solicitação de interesse</a>
                        <i className="fas fa-headset"></i>
                    </div>
                    <div>
                        <a href="#">Comentários&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
                        <i className="fas fa-comment-alt"></i>
                        <a href="anunciosExpiracao.html">Anúncios a expirar</a>
                        <i className="fas fa-calendar-alt"></i>
                    </div>
                </section>
            </div>

        </section>
    </main>


    <Rodape/>
    </div>
);
}

export default PainelAdm;