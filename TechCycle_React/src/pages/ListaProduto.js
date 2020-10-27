import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import CabecalhoAdm from '../componentes/CabecalhoAdm';
import Rodape from '../componentes/Rodape';

import '../assets/css/padrao.css';
import '../assets/css/listaproduto.css'

class ListaProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaproduto: [],
            idProduto: '',
            nomeProduto: '',
            descricao: '',
            mensagemErro: '',
        }

        this.buscarProdutos = this.buscarProdutos.bind(this);
        this.deletarProduto = this.deletarProduto.bind(this);
    }

    buscarProdutos() {
        fetch('http://localhost:5000/api/produto')
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({ listaproduto: data });
            })
            .catch((erro) => {
                console.log(erro);
            })
    }
    direcionaId(id){
        console.log(id);
    }

    deletarProduto = (idProduto) => {
        console.log("Excuindo");

        fetch("http://localhost:5000/api/produto/" + idProduto,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.buscarProdutos();
                this.setState(() => ({ listaproduto: this.state.listaproduto }))
            })
            .catch(error => {
                console.log(error)
                this.setState({ mensagemErro: 'Não foi possível excluir, verifique se não há anúncio já cadastrado com esse produto' })
            })
    }
    
    componentDidMount() {
        this.buscarProdutos();
        this.deletarProduto();
    }

    render() {
        return (
            <div>
                <CabecalhoAdm />

                <main className="produtoCadastrado_main">
                    <div className="titulo_div">
                        <h1>Produtos Cadastrados</h1>
                    </div>
                    <hr />
                    <div className="home_secao-filtro">
                        <h4>Filtrar por:</h4>
                        <div className="home_filtros">
                            <div className="categoria">
                                <h5>Marca:</h5>
                                <input type="checkbox" id="dell" />
                                <label for="dell">Dell</label>
                                <input type="checkbox" id="apple" />
                                <label for="apple">Apple</label>
                            </div>
                            <div className="categoria">
                                <h5>Memória:</h5>
                                <input type="checkbox" id="32gb" />
                                <label for="16gb">32GB</label>
                                <input type="checkbox" id="16gb" />
                                <label for="16gb">16GB</label>
                                <input type="checkbox" id="8gb" />
                                <label for="8gb">8GB</label>
                                <input type="checkbox" id="6gb" />
                                <label for="6gb">6GB</label>
                                <input type="checkbox" id="4gb" />
                                <label for="4gb">4GB</label>
                            </div>
                            <div className="categoria">
                                <h5>Precessador:</h5>
                                <input type="checkbox" id="intel" />
                                <label for="intel">Intel</label>
                                <input type="checkbox" id="amd" />
                                <label for="amd">AMD</label>
                            </div>
                            <div class="categoria categoriaDiferente">
                                <h5>Categoria:</h5>
                                <div>
                                    <input type="checkbox" id="computador" />
                                    <label for="computador">Computador</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="notebook" />
                                    <label for="notebook">Notebook</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="produtoCadastrado_main">
                        {
                            this.state.listaproduto.map(function (produto) {
                                return (
                                    <form name="card" value={produto.idProduto} className="home_card" key={produto.idProduto}>
                                        <div className="home_img">
                                            <img src={require("../assets/img/laptip.svg")} alt="Macbook" />
                                        </div>
                                        <div className="home_linha">
                                            <h3 className="home_nomeProduto">{produto.nomeProduto}</h3>
                                        </div>
                                        <div className="home_texto">
                                            <p>{produto.descricao}</p>
                                        </div>
                                        <div className="home_div_btn">
                                            <button type="submit" onClick={(e) => {e.preventDefault(); this.direcionaId(produto.idProduto)}} className="home_btn">
                                                <Link to={{
                                                    pathname: '/editarproduto',
                                                    state: {idProduto: produto.idProduto }
                                                }}>
                                                Editar Produto</Link></button>
                                            <button type="submit" onClick={i => this.deletarProduto(produto.idProduto)} className="home_btn">Excluir Produto</button>
                                        </div>
                                    </form>
                                )
                            }.bind(this))
                        }
                    </div>
                </main>
                <Rodape />
            </div>
        );
    }
}
export default ListaProduto;    