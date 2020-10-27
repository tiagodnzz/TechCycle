import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../src';


import{Route,BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {usuarioAutenticado, parseJwt} from './services/auth';

import PainelAdm from './pages/PainelAdm';
import Home from './pages/Home';
import Login from './pages/Login';
import SobreNos from './pages/SobreNos';
import AlterarAnuncio from './pages/AlterarAnuncio';
import CadastroAnuncio from './pages/CadastroAnuncio';
import CadastroUsuario from './pages/CadastroUsuario';
import Descricao from './pages/Descricao';
import EditarPerfilUsuario from './pages/EditarPerfilUsuario';
import EditarProduto from './pages/EditarProduto';
import ListaInteresse from './pages/ListaInteresse';
import ListaProduto from './pages/ListaProduto';
import PerfilUsuario from './pages/PerfilUsuario';
import CadastroProduto from './pages/CadastroProduto';
import  ListaUsuario from './pages/ListaUsuario';
import Aprovacoes from './pages/Aprovacoes';


// const PermissaoLogar = ({component : Component}) => (
//     <Route
//     render = {props =>
//     // usuarioAutenticado() && parseJwt().Role === 'Administrador' || 
//     usuarioAutenticado() && parseJwt().Role === 'Funcionário' ? (
//         <Component {...props}/>
//     ) : (
//         <Redirect to = {{pathname: '/login'}}/>
//     )}/>
// )

const PermissaoAdm = ({component : Component}) => (
    <Route
        render = {props =>
            usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
                <Component {...props}/>
            ) : (
                <Redirect to = {{pathname : '/login'}}/>
            )}/>
)



const Rotas = (
    <Router>
        <div>
        <Switch>
            <PermissaoAdm path="/paineladm" component={PainelAdm}/>
            <Route path="/home" component={Home}/> 
            <Route exact path="/" component={Login}/>  
            <Route path="/sobrenos" component={SobreNos}/>
            <Route path="/alteraranuncio" component={AlterarAnuncio}/>
            <Route path="/cadastroanuncio" component={CadastroAnuncio}/>
            <Route path="/cadastrousuario" component={CadastroUsuario}/>
            <Route path="/descricao" component={Descricao}/>
            <Route path="/editarperfil" component={EditarPerfilUsuario}/>
            <Route path="/editarproduto" component={EditarProduto}/>
            <Route path="/listainteresse" component={ListaInteresse}/>
            <Route path="/listaproduto" component={ListaProduto}/>
            <Route path="/perfilusuario" component={PerfilUsuario}/>
            <Route path="/cadastroproduto" component={CadastroProduto}/>
            <Route path="/listausuario" component={ListaUsuario}/>
            <Route path="/aprovacoes" component={Aprovacoes}/>
        </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
