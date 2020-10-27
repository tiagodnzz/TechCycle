import React, {Component} from 'react';

import CabecalhoUser from '../componentes/CabecalhoUser';
import Rodape from '../componentes/Rodape';
import { parseJwt } from '../services/auth';

import '../assets/css/padrao.css';
import '../assets/css/listainteresse.css';

import {Link} from "react-router-dom"

class ListaInteresse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: parseJwt().IdUsuario,
            listainteresse: [],
            idInteresse: '',
            // usuario : ''
        }
        this.buscarInteresse = this.buscarInteresse.bind(this);
    }



    buscarInteresse() {
        fetch('http://localhost:5000/api/interesse' ) // + this.state.token
        .then(resposta => resposta.json())
        .then(data => {
            this.setState({ listainteresse: data, });
        })
        .catch((erro) => {
            console.log(erro);
        })
    }
    componentDidMount() {
        this.buscarInteresse();
    }

    render(){
        return(
        <div>
            <CabecalhoUser />

            <main className="main_li">
            <section className="titulo_interesses">
                <h1>Lista de Interesses</h1>
                <hr></hr>
            </section>

            <nav className="nav_tabs">
			<ul>
                <li>
                    <input type="radio" id="tab1" className="rd_tab" name="tabs" checked> 
                    </input>
                    <label for="tab1" className="tab_label">Interesses Aprovados</label>
                    <div className="tab-content">
                        <article>
                            <section className="lista_aprovados">
                                <ul className="lista_aprovados">
                                    {
                                        this.state.listainteresse.map(function (interesse) {
                                            if (interesse.aprovado == "Sim") {
                                                
                                                return (
                                                    
                                                    <li className="linha" value="{interesse.idInteresse}">
                                                        <div className="li_imagem">
                                                            <img src={"http://localhost:5000/Resources/Anuncio/" + interesse.idAnuncioNavigation.foto} alt="imagem do produto" />
                                                        </div>
                                                        {console.log(interesse.idAnuncioNavigation.foto)}
                                                        <div className="li_titulo">
                                                            <h3>{interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</h3>
                                                        </div>
                                                        <div className="li_descricao">
                                                            <p>{interesse.idAnuncioNavigation.idProdutoNavigation.descricao}</p> 
                                                        </div>
                                                    </li>
                                                )
                                            }
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
                    <label for="tab2" className="tab_label">Interesses sem resposta</label>

                    <div className="tab-content">
                        <article>
                            <section className="lista_aprovados">
                                <ul className="lista_aprovados">
                                {
                                    this.state.listainteresse.map(function (interesse) {
                                        if (interesse.aprovado == "Não") {
                                            
                                            return (
                                            
                                                <li className="linha" value="{interesse.idInteresse}">
                                                    <div className="li_imagem">
                                                        <img src={"http://localhost:5000/Resources/Anuncio/" + interesse.idAnuncioNavigation.foto} alt="imagem do produto" />
                                                    </div>
                                                    {console.log(interesse.foto)}
                                                    <div className="li_titulo">
                                                        <h3>{interesse.idAnuncioNavigation.idProdutoNavigation.nomeProduto}</h3>
                                                    </div>
                                                    <div className="li_descricao">
                                                        <p>{interesse.idAnuncioNavigation.idProdutoNavigation.descricao}</p> 
                                                    </div>
                                                </li>
                                            )
                                        }
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
        );
    }
}

export default ListaInteresse;
    