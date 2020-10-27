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
                <li><a href="#">Sobre Nós</a></li>
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
            <img src={require("../assets/img/julius.jpg")} alt=""/>
        </div>
        <ul className="menu-admin">
            <li><Link to={'/perfilusuario'}>
            Meu Perfil <span><i className="far fa-user-circle"></i></span>
            </Link></li>
                
            <li><Link to={'/listainteresse'}>Lista de Interesse <span><i class="fas fa-clipboard-list"></i></span>
            </Link></li>
        </ul>

        <ul>
            <li><a href="" id="voltar"><i className="fas fa-arrow-left"></i></a></li>
            <li><Link to={'/'} className="botao-sair" onClick={e => localStorage.removeItem('usiario-tech')}>
                Sair <span><i class="fas fa-sign-out-alt"></i></span></Link></li>
        </ul>
    </nav>
    </div>
    );
}
export default Cabecalho;