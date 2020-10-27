import React, {Component} from 'react';
import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/aprovacoes.css';




class Aprovacoes extends Component{
   constructor(props){
       super(props);
       this.state ={
           listaUsuario: [],
           listaInteresse:[],
            usuario: {
               nome:'',
               departamento:''
           },
           produto:{
            nomeUsuario: '',
            nomeProduto:''
           }

       }
   }

   buscarUsuario(){
    fetch("http://localhost:5000/api/usuario/buscarTipo/agd")
    .then(response => response.json())
    .then(data => {
        this.setState({listaUsuario:data})
    })
    .catch((error) => console.log(error))
    }

    buscarInteresse(){
        fetch("http://localhost:5000/api/interesse")
        .then(response => response.json())
        .then(data => {
            this.setState({listaInteresse:data})
        })
        .catch((error) => console.log(error))
        }

componentDidMount(){
    this.buscarUsuario();
    this.buscarInteresse();
}


   
    render(){
        return(
            <div>
                <CabecalhoAdm/>
                <main className="main_aprovacoes">
                <section className="titulo_aprovacoes">
                    <h1>Lista de aprovações</h1>
                    <hr/>
                </section>
                <nav className="nav_tabs">
                    <ul>
                        <li>
                        <input type="radio" id="tab1" className="rd_tab" name="tabs" checked/>
                        <label for="tab1" className="tab_label">Lista de Pedidos</label>
                        <div className="tab-content">
                        <article>
                            <section className="lista_aprovados_main">
                                <ul className="lista_aprovados">
                                {
                                    this.state.listaInteresse.map(function (interesse) 
                                        {
                                            return (
                                                
                                                <li className="linha" value="{usuario.idUsuario}">
                                                    <div className="li_titulo">
                                                        <h3>{interesse.idUsuarioNavigation.nome}</h3>
                                                    </div>
                                                    <div className="li_descricao">
                                                        <p>demonstrou interesse em uma uma unidade de {interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</p>
                                                    </div>
                                                    <div className="li_botao">
                                                        <button className="botao_recusar">Recusar</button>
                                                        <button className="botao_aprovar">Aprovar</button>
                                                    </div>
                                                </li>
                                            )
                                        }.bind(this))
                                    }  
                                </ul>
                            </section>
                        </article> 
                        </div>
                        </li>
                        <li>
                        <input type="radio" id="tab2" className="rd_tab" name="tabs" checked> 
                    </input>
                    <label for="tab2" className="tab_label">Solicitação de Cadastro</label>

                    <div className="tab-content">
                        <article>
                            <section className="lista_aprovados">
                                <ul className="lista_aprovados">
                                {
                                    this.state.listaUsuario.map(function (usuario) 
                                        {
                                            return (
                                                
                                                <li className="linha" value="{usuario.idUsuario}">
                                                    <div className="li_titulo">
                                                        <h3>{usuario.nome}</h3>
                                                    </div>
                                                    <div className="li_descricao">
                                                        <p>{usuario.departamento}</p>
                                                    </div>
                                                    <div className="li_botao">
                                                        <button className="botao_recusar">Recusar</button>
                                                        <button className="botao_aprovar">Aprovar</button>
                                                    </div>
                                                </li>
                                            )
                                        }.bind(this))
                                    }
                                </ul>
                            </section>
                        </article> 
                    </div>
                        </li>
                    </ul> 
                </nav>
                </main>
                <Rodape/>       
            </div>
        )
    }
}
export default Aprovacoes;