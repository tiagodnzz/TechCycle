import React from 'react';
import '../assets/css/padrao.css';
import '../assets/css/cabecalho.css';
import {Link} from 'react-router-dom';


function Cabecalho(){
    return(
    <div>
    <header id="topo">

       <Link to={'/home'}><img src={require("../assets/img/Logo.svg")} alt="Logotipo"/></Link>
        <nav>
            <ul>
                <li><Link to={'/sobrenos'}>Sobre Nós</Link></li>
            </ul>
        </nav>
    </header>
    {/* menu lateral */}
    <input type="checkbox" id="chk"/>
    <label for="chk" className="menu-icon">&#9776;</label>

    <div className="home_bg">

    </div>

    <nav className="menu" id="principal">
        <div className="foto-perfil">
            <img src={require("../assets/img/testFoto.jpg")} alt=""/>
        </div>
        <ul className="menu-admin">
            <li><Link to={'/paineladm'}>
            Painel do Administrador <span><i className="fas fa-user-cog"></i></span>
            </Link></li>
            
            <li><Link to={'/cadastroanuncio'}>
            Cadastrar Anúncio <span><i className="fas fa-plus"></i></span>
            </Link></li>

            <li><Link to={'/aprovacoes'}>
            Lista de Pedidos <span><i className="fas fa-user-plus"></i></span>
            </Link></li>
            
            <li><Link to={'/listaproduto'}>
            Produtos Cadastrados <span><i className="fas fa-clipboard-list"></i></span>
            </Link></li>
          
        </ul>

        <ul>
            <li><a href="" id="voltar"><i className="fas fa-arrow-left"></i></a></li>
            <li><a href="index.html" className="botao-sair">Sair <span><i class="fas fa-sign-out-alt"></i></span></a></li>
        </ul>
    </nav>
    </div>

    );
}
export default Cabecalho;